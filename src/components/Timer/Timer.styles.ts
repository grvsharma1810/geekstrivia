import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		timer: {
			color: theme.palette.primary.dark,
		},
	})
);
