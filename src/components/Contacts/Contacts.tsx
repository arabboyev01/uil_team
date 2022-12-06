import {Box} from "@mui/system";
import mainBg from "../../../public/assets/images/serviceBg.png";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.5691529357596!2d72.35905072067553!3d40.74895826512224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sen!2s!4v1670316159049!5m2!1sen!2s"
                    height="450"  loading="lazy" style={{width: "100%"}}
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </Box>
            <Testimonial />
            <Footer />
        </Box>
    )
}
