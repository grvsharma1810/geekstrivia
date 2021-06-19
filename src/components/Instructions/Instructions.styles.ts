import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		instructions: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        instructionsContainer: {
            fontSize: "1.25rem",            
        },
        startButton: {
            marginTop: '1rem'
        }
	})
);
