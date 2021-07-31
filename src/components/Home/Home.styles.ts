import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		homeContainer: {
			padding: theme.spacing(2),
		},
		formField: {
			width: "100%",
			marginBottom: theme.spacing(2),
		},
		playButton: {
			fontWeight: theme.typography.fontWeightBold,
			fontSize: theme.typography.h5.fontSize,
		},
		image: {
			width: "100%",
		},
		bannerText: {
			fontSize: "6vw",
			position: "absolute",
			top: "5vw",
			left: "7vw",
			width: "30%",
			textAlign: "center",
			fontWeight: theme.typography.fontWeightBold,
			color: theme.palette.type === "light" ? "#2F2E41" : "white",
		},
		bannerBox: {
			marginTop: theme.spacing(4),
			position: "relative",
		},
		card: {
			maxWidth: "100%",
		},
		cardContent: {
			textAlign: "center",
			backgroundColor:theme.palette.primary.main,
			color: "white",
		},
		cardActions:{
			display: "flex",
			justifyContent: "center",
		}
	})
);
