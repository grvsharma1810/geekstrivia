import {
	Container,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	CircularProgress,
	Box,
	Button,
	Typography,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./Home.styles";
import { getQuestionSets } from "./Home.services";
import { QuestionSet } from "./Home.types";
import HomePageBanner from "../../assets/banner.svg";
import { useGame } from "../../providers/GameProvider";

function Home() {
	const navigate = useNavigate();
	const classes = useStyles();
	const { gameDispatch } = useGame();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [questionSets, setQuestionSets] = useState<Array<QuestionSet>>([]);

	useEffect(() => {
		(async function () {
			setIsLoading(true);
			const questionSets = await getQuestionSets();
			if ("questionSets" in questionSets) {
				setQuestionSets(questionSets.questionSets);
			} else {
				// Handle Error
			}
			setIsLoading(false);
		})();
	}, []);

	const play = (questionSetId: string) => {
		navigate("/playzone", {
			state: {
				questionSetId: questionSetId,
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
				<>
					<Box mb={3} className={classes.bannerBox}>
						<Typography className={classes.bannerText}>
							Test Your Knowledge With Quizes
						</Typography>
						<img src={HomePageBanner} className={classes.image} />
					</Box>
					<Container maxWidth="md" className={classes.homeContainer}>
						<Grid container spacing={3}>
							{questionSets.map((questionSet, index) => (
								<Grid key={questionSet._id} item xs={12} sm={6} md={4}>
									<Card className={classes.card}>
										<CardActionArea>
											<CardMedia
												component="img"
												alt={questionSet.name}
												height="200"
												image={`https://picsum.photos/400?random=${
													index + 1
												}`}
												title="Contemplative Reptile"
											/>
											<CardContent
												className={classes.cardContent}
											>
												<Box
													fontSize={25}
													fontWeight="fontWeightBold"
												>
													{questionSet.name.toUpperCase()}
												</Box>
											</CardContent>
										</CardActionArea>
										<CardActions
											className={classes.cardActions}
										>
											<Button
												onClick={() =>
													play(questionSet._id)
												}
												fullWidth={true}
												size="large"
												color="primary"
											>
												Play
											</Button>
										</CardActions>
									</Card>
								</Grid>
							))}
						</Grid>
					</Container>
				</>
			)}
		</>
	);
}

export default Home;
