import useStyles from "./services.style";
import {Box} from "@mui/system";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import mainBg from "../../../public/assets/images/serviceBg.png";
import Offer from "../../reusiable/Offer/Offer";
import MainServices from "../../reusiable/Services/Services";
import Testimonial from "../../reusiable/Testemonial/Testimonial";
import Footer from "../../reusiable/Footer/Footer";
export default function Services(){
    return(
        <Box>
            <PageHeader text="Bizning xizmatlar" image={mainBg} />
            <Offer />
            <MainServices />
            <Testimonial />
            <Footer />
        </Box>
    )
}
