import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		options: {
			width: "100%",
			padding: theme.spacing(2),
			cursor: "pointer",
		},
		optionValue: {
			wordWrap: "break-word",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		question: {
			marginTop: theme.spacing(1),
		},
		correctOption: {
			backgroundColor: "green",
			color: "white",
		},
		wrongOption: {
			backgroundColor: "red",
			color: "white",
		},
	})
);
