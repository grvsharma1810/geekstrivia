import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
			fontSize: "2rem",
			cursor: "pointer",
		},
		title: {
			flexGrow: 1,
		},
	})
);
