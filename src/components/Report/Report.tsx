import { Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { GameContext } from "../../App.types";
import { useGame } from "../../providers/GameProvider";

function Report() {
	const {
		gameState: { score },
	} = useGame() as GameContext;

	return (
		<Box mt={2} mb={2} textAlign="center">
			<Box mb={2} fontWeight="fontWeightBold" fontSize={50}>
				You Scored <br /> {score} <br /> Points
			</Box>
			<Link to="/" style={{ textDecoration: "none" }}>
				<Button variant="contained" color="secondary" size="large">
					Play Again
				</Button>
			</Link>
		</Box>
	);
}

export default Report;
