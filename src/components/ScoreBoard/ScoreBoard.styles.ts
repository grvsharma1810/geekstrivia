import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		scoreBoard: {
			borderRadius: theme.spacing(2),
			backgroundColor: theme.palette.primary.main,
			marginBottom: theme.spacing(2),
		},
		score: {
			padding: theme.spacing(1),
			color: "white",
		},
		points: {
			fontSize: "1.5rem",
			fontWeight: theme.typography.fontWeightBold,
		},
	})
);
