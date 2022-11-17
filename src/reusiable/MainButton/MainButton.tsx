import {Box} from "@mui/system";
import {Button} from "@mui/material";
import useStyles from "./mainbutton.style";
export default function MainButton({name}:any){
    const classes = useStyles();
    return(
        <Box>
            <Button className={classes.mainButton}>{name}</Button>
        </Box>
    )
}
