import {Box} from "@mui/system";
import useStyles from "./footer.style"
import ContactInfo from "./ContactInfo/ContactInfo";
import FooterHeader from "./FooterHeader/FooterHeader";
export default function Footer(){
    const classes = useStyles();
    return(
        <Box className={classes.footerWrapper}>
            <ContactInfo />
            <FooterHeader />
        </Box>
    )
}
