import {Box} from "@mui/system";
import useStyles from "./home.style";
import Navbar from "../../reusiable/Navbar/Navbar";
import Hero from "./Hero/Hero";

export  default function Home(){
    const classes = useStyles();
    return(
        <Box className={classes.homeWrapper}>
            <Navbar />
            <Hero />
        </Box>
    )
}
