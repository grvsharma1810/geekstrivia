import { makeStyles, createStyles,Theme } from "@material-ui/core"

export const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        homeContainer:{
            padding: theme.spacing(2)
        },
        formField:{
            width:"100%",
            marginBottom: theme.spacing(2)
        },
        playButton:{
            fontWeight:theme.typography.fontWeightBold,
            fontSize:theme.typography.h5.fontSize
        },
        image:{
            fontSize: "12rem"
        }
    })
)