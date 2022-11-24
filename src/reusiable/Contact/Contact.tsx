import {Box} from "@mui/system";
import useStyles from "./contact.style";
import {CONTACT_DATA} from "../../dumbData/dumbData";
import {Typography} from "@mui/material";
export default function ContactInfo(){
    const classes = useStyles();
    return(
        <Box className={classes.contactWrapper}>
            <Box className={classes.contactContentWrapper}>
                <Box className={classes.contacts}>
                    {CONTACT_DATA.map(item =>
                        <Box className={classes.contact} key={item.id}>
                            <Typography className={classes.title}>{item.title}</Typography>
                            <Typography className={classes.description}>{item.description}</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
