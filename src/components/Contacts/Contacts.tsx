import {Box} from "@mui/system";
import mainBg from "../../../public/assets/images/serviceBg.png";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import Maps from "../../reusiable/Map/Map";
import useStyles from "./contact.style"
import Testimonial from "../../reusiable/Testemonial/Testimonial";
import Footer from "../../reusiable/Footer/Footer";
import ContactInfo from "../../reusiable/Contact/Contact";
export default function Contacts(){
    const classes = useStyles();
    return(
        <Box>
            <PageHeader text="Biz bilan bog'laning" image={mainBg} />
            <ContactInfo />
            <Box className={classes.contactMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7148267451917!2d72.3609905043433!3d40.75214782389496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedab36235829%3A0x35ca12ac9cf910c2!2sMovarounnahr%20School!5e0!3m2!1sen!2s!4v1669217595204!5m2!1sen!2s"
                    width="600" height="450" style={{border:0, width: "100%", height: "450px"}} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Box>
            <Testimonial />
            <Footer />
        </Box>
    )
}
