import { makeStyles, createStyles, Theme } from "@material-ui/core";
import yellow from "@material-ui/core/colors/yellow";


export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		scoreHeaderContainer: {
			backgroundColor: theme.palette.primary.main,
			padding: theme.spacing(3),
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
            borderBottomLeftRadius: theme.spacing(6),
            borderBottomRightRadius: theme.spacing(6),
		},
		scoreContainer: {			
			borderRadius: "100%",
			padding: theme.spacing(2),
			backgroundColor: theme.palette.primary.light,
            boxShadow: `0 0 5px 8px ${theme.palette.primary.light}`
		},
		bottomProgress: {
			position: "absolute",
			left: 0,
			color: theme.palette.grey[
				theme.palette.type === "light" ? 200 : 700
			],
		},
		topProgress: {
			color: yellow[600],
		},
        circle: {
            strokeLinecap: 'round',
        },
        percentageScore: {
            fontSize: "2rem",
            color: "white"
        }
	})
);
