import {Box} from "@mui/system";
import useStyles from "./home.style";
import Navbar from "../../reusiable/Navbar/Navbar";
import Hero from "./Hero/Hero";
import Services from "../../reusiable/Services/Services";
import Portfolios from "../../reusiable/Portfolios/Portfolios";
import {useContext} from "react";
import CreateContextApi from "../../context/createContext";
import Brochure from "../../reusiable/Brochure/Brochure";
import {BROCHURE_DATA} from "../../reusiable/Brochure/brochure.data";
import Testimonial from "../../reusiable/Testemonial/Testimonial";
import Footer from "../../reusiable/Footer/Footer";
import Mentors from "../../reusiable/Mentors/Mentors";

export  default function Home(){
    const classes = useStyles();
    return(
        <Box>
        <Box className={classes.homeWrapper}>
            <Navbar />
            <Hero />
        </Box>
        <Box>
            <Services />
            <Portfolios />
            <Brochure data={BROCHURE_DATA}/>
            <Mentors />
            <Testimonial />
            <Footer />
        </Box>
        </Box>
    )
}
