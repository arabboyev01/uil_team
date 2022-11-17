import {Box} from "@mui/system";
import useStyles from "./hero.style"
import AnimatedText from "../../../reusiable/AnimateText/AnimateText";
import MainButton from "../../../reusiable/MainButton/MainButton";
export default function Hero(){
    const classes = useStyles();
    return(
        <Box className={classes.heroWrapper}>
            <AnimatedText delay="1.2">
                <h1 className={classes.heroHeading}>Bizning maqsad ISHONCH!</h1>
            </AnimatedText>
            <Box className={classes.buttonWrapper}>
                <MainButton name='Barchasi'/>
            </Box>
        </Box>
    )
}
