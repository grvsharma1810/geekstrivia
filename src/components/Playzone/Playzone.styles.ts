import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		questionHeader: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
		},
		score: {
			color: theme.palette.primary.dark,
		},
		skipButtonContainer: {
			marginTop: theme.spacing(6),
			display: "flex",
			justifyContent: "flex-end",
		},
	})
);
