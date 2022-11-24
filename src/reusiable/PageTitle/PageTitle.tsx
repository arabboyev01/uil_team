import {Box} from "@mui/system";
import useStyles from "./pagetitle.style";
import {Typography} from "@mui/material";
export default function PageTitle({title}: any){
    const classes = useStyles();
    return(
        <Box className={classes.pageTitleWrapper}>
            <Typography className={classes.titleText}>{title}</Typography>
        </Box>
    )
}
