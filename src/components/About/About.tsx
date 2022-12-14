import useStyles from "./about.style";
import {Box} from "@mui/system";
import Brochure from "../../reusiable/Brochure/Brochure";
import {ABOUT_BROCHURE, SECOND_ABOUT_BROCHURE} from "../../dumbData/dumbData";
import Footer from "../../reusiable/Footer/Footer";
import Testimonial from "../../reusiable/Testemonial/Testimonial";
import Mentors from "../../reusiable/Mentors/Mentors";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import aboutBg from "../../../public/assets/images/about.png";
export default function About(){
    const classes = useStyles();
    return(
        <Box className={classes.aboutWrapper}>
              <PageHeader text="Biz haqimizda" image={aboutBg} />
              <Box className={classes.mainAbout}>
                <Brochure data={ABOUT_BROCHURE} />
              </Box>
              <Mentors />
              <Box className={classes.mainAbout}>
                <Brochure data={SECOND_ABOUT_BROCHURE} />
              </Box>
             <Testimonial />
            <Footer />
        </Box>
    )
}
