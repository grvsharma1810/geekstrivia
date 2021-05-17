import {
	Container,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	CircularProgress,
	Box,
	Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Home.styles";
import { getCategories } from "./Home.services";
import { Category } from "./Home.types";
import LogoIcon from "../../assets/LogoIcon";

function Home() {
	const navigate = useNavigate();
	const classes = useStyles();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [categories, setCategories] = useState<Array<Category>>([]);
	const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);
	const [selectedDifficulty, setSelectedDifficulty] = useState<string>("any");

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			const categories = await getCategories();
			if ("trivia_categories" in categories) {
				setCategories(categories.trivia_categories);
			} else {
				// Handle Error
			}
			setIsLoading(false);
			console.log(categories);
		})();
	}, []);

	const handleCategoryChange = (event: any) => {
		setSelectedCategoryId(event.target.value);
	};

	const handleDifficultyChange = (event: any) => {
		setSelectedDifficulty(event.target.value);
	};

	const play = () => {
		navigate("/playzone", {
			state: {
				categoryId: selectedCategoryId,
				difficulty: selectedDifficulty,
			},
		});
	};

	return (
		<>
			{isLoading ? (
				<Box display="flex" justifyContent="center" p={4}>
					<CircularProgress />
				</Box>
			) : (
				<Container maxWidth="md" className={classes.homeContainer}>
					<Box mb={3} display="flex" justifyContent="center">
						<LogoIcon className={classes.image}/>
					</Box>
					<FormControl className={classes.formField}>
						<InputLabel id="category-select">Category</InputLabel>
						<Select
							labelId="category-select"
							id="category-select"
							value={selectedCategoryId}
							onChange={handleCategoryChange}
						>
							<MenuItem key={1} value={1}>
								Any Category
							</MenuItem>
							{categories.map((category) => (
								<MenuItem key={category.id} value={category.id}>
									{category.name}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<FormControl className={classes.formField}>
						<InputLabel id="category-select">
							Difficulty Level
						</InputLabel>
						<Select
							labelId="difficulty-select"
							id="difficulty-select"
							value={selectedDifficulty}
							onChange={handleDifficultyChange}
						>
							<MenuItem key={"any"} value={"any"}>
								Any
							</MenuItem>
							<MenuItem key={"easy"} value={"easy"}>
								Easy
							</MenuItem>
							<MenuItem key={"medium"} value={"medium"}>
								Medium
							</MenuItem>
							<MenuItem key={"hard"} value={"hard"}>
								Hard
							</MenuItem>
						</Select>
					</FormControl>
					<Box display="flex" justifyContent="center" p={2}>
						<Button
							onClick={(_) => play()}
							size="large"
							variant="contained"
							color="secondary"
							className={classes.playButton}
						>
							PLAY
						</Button>
					</Box>
				</Container>
			)}
		</>
	);
}

export default Home;
