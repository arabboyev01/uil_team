import {Box} from "@mui/system";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import mainBg from "../../../public/assets/images/projects.png";
import PortfoliosComponents from "../../reusiable/Portfolios/Portfolios";
import Testimonial from "../../reusiable/Testemonial/Testimonial";
import Footer from "../../reusiable/Footer/Footer";
export default function Portfolios(){
    return(
        <Box>
            <PageHeader text="Bizning proyektlar" image={mainBg} />
            <PortfoliosComponents />
            <Testimonial />
            <Footer />
        </Box>
    )
}
