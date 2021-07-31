import React from "react";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { useStyles } from "./ReportHeader.styles";
import { ReportHeaderProps } from "./ReportHeader.types";

function ReportHeader({ score, totalQuestions }: ReportHeaderProps) {
	const classes = useStyles();

	const percentageScore = Math.round((score * 100) / totalQuestions);

	return (
		<Box mb={2} className={classes.scoreHeaderContainer}>
			<Box className={classes.scoreContainer}>
				<Box style={{ position: "relative" }}>
					<CircularProgress
						className={classes.bottomProgress}
						thickness={4.5}
						size={150}
						color="inherit"
						variant="determinate"
						value={100}
					/>
					<CircularProgress
						className={classes.topProgress}
						thickness={4.5}
						size={150}
						classes={{
							circle: classes.circle,
						}}
						color="inherit"
						variant="determinate"
						value={percentageScore}
					/>
					<Box
						top={0}
						left={0}
						bottom={0}
						right={0}
						position="absolute"
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<Typography className={classes.percentageScore}>
							{`${percentageScore}%`}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default ReportHeader;
