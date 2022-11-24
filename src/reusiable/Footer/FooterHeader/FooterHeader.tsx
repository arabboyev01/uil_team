import useStyle from "./footerHeader.style";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Map from "../../Map/Map";
export default  function FooterHeader(){
    const classes = useStyle();
    return(
        <Box className={classes.footerWrapper}>
            <Box className={classes.footerContentWrapper}>
                <Box className={classes.contactInfo}>
                    <Typography className={classes.contactTitle}>Aloqa</Typography>
                    <Typography className={classes.adress}><LocationOnIcon />  Loyihaviy Mashrab 7-uy, Andijon Shahar.</Typography>
                    <a className={classes.phone}><PhoneIcon />  (99) 988-35-00</a>
                    <a className={classes.email}><EmailIcon />  abbosarabboyev9@gmail.com</a>
                </Box>
                <Box className={classes.contactInfo}>
                    <Typography className={classes.contactTitle}>Muhim sahifalar</Typography>
                    <Typography className={classes.links}>Xizmatlarimiz</Typography>
                    <Typography className={classes.links}>Jamoamiz</Typography>
                    <Typography className={classes.links}>Portfoliolar</Typography>
                    <Typography className={classes.links}>Aloqa</Typography>
                </Box>
                <Box className={classes.contactInfo}>
                    <Typography className={classes.contactTitle}>Bizni xaritadan qidiring.</Typography>
                    <Box className={classes.mapWrapper}>
                        <Map />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
