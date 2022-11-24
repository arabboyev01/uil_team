import useStyles from "./map.style";
import {Box} from "@mui/system";

export default function Maps(){
    const classes = useStyles();
    return(
        <Box className={classes.mapWrapper}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1425.7148267451917!2d72.3609905043433!3d40.75214782389496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedab36235829%3A0x35ca12ac9cf910c2!2sMovarounnahr%20School!5e0!3m2!1sen!2s!4v1669217595204!5m2!1sen!2s"
                style={{border:0}} width="330" height="370" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </Box>
    )
}
