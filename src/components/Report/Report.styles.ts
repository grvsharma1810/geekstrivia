import { makeStyles, createStyles, Theme } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		playAgainButtonContainer: {			
			display: "flex",
			justifyContent: "center",
            width:"100%",
		},
	})
);
