import React from "react";
import {
	CircularProgress,
	Box,
	Button,
	Typography,
	Container,
} from "@material-ui/core";
import { flexbox } from "@material-ui/system";
import { useStyles } from "./Instructions.styles";
import { useLocation, useNavigate } from "react-router-dom";

function Instructions() {
	const classes = useStyles();
	const navigate = useNavigate();
	const { state } = useLocation();

	return (
		<Box mt={3} mb={3} className={classes.instructions}>
			<Typography variant="h3" gutterBottom>
				Instructions
			</Typography>
			<Container maxWidth="sm" className={classes.instructionsContainer}>
				<ol>
					<li>This question set contains 5 questions.</li>
					<li>For each question, you will get 15 secs to answer.</li>
					<li>
						After 15 secs, the question will be automatically
						skipped
					</li>
					<li>Each question caries 1 marks.</li>
					<li>There's no negative marking for wrong answers</li>
					<li>You cannot revisit the previous questions</li>
					<Button
						onClick={() => navigate("/playzone", { state })}
						fullWidth={true}
						size="large"
						color="primary"
						variant="contained"
						className={classes.startButton}
					>
						Start Game
					</Button>
				</ol>
			</Container>
		</Box>
	);
}

export default Instructions;
