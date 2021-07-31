import { createMuiTheme } from "@material-ui/core";
import { teal, grey } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
	palette: {
		type: "light",
		primary: teal,
		secondary: grey,
	},
});

export const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
		primary: teal,
		secondary: grey,
	},
});
