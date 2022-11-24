import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import useStyles from "./title.style";
export default function MainTitle({title}: any){
    const classes = useStyles();
    return(
        <Typography className={classes.title}>{title}</Typography>
    )
}
