import {Box} from "@mui/system";
import useStyles from "./contactinfo.style"
import {Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function ContactInfo(){
    const classes = useStyles();
    return(
        <Box className={classes.contactInfoWrapper}>
            <Box className={classes.contactContentWrapper}>
                <Box className={classes.contactInfo}>
                    <Typography className={classes.contactHead}>Biz bilan 24/7 bog&apos;laning.</Typography>
                    <a href="tel:+998999883500" className={classes.phone}>(99) 988-35-00</a> <br/>
                    <a href="tel: +998972343407" className={classes.phone}>(97) 234-34-07</a>
                </Box>
                <Box className={classes.contactIcons}>
                    <InstagramIcon className={classes.icon}/>
                    <TelegramIcon className={classes.icon}/>
                    <LinkedInIcon className={classes.icon}/>
                </Box>
            </Box>
        </Box>
    )
}
