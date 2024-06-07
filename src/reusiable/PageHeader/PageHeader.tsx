import useStyles from "./pageheader.style";
import {Box} from "@mui/system";
import Navbar from "../Navbar/Navbar";
import AnimatedText from "../AnimateText/AnimateText";
import PageTitle from "../PageTitle/PageTitle";

export default function PageHeader(props: any){
    const classes = useStyles();
    return(
            <Box className={classes.pageContentWrapper} style={{backgroundImage: `url(${props?.image?.src})`}}>
                <Navbar />
                <Box className={classes.mainTextWrapper}>
                    <AnimatedText>
                        <PageTitle title={props.text}/>
                    </AnimatedText>
                </Box>
            </Box>
    )
}
