import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		options: {
			width: "100%",
			padding: theme.spacing(2),
            cursor:"pointer"
		},
		optionValue: {
			wordWrap: "break-word",
		},
		question:{
			marginTop:theme.spacing(2)
		}
	})
);
