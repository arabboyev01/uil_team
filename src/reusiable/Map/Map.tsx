import useStyles from "./map.style";
import {Box} from "@mui/system";

export default function Maps(){
    const classes = useStyles();
    return(
        <Box className={classes.mapWrapper}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2222.5691529357596!2d72.35905072067553!3d40.74895826512224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bced630e0f4795%3A0xf72460c2369068a8!2sDigital%20City!5e0!3m2!1sen!2s!4v1670316159049!5m2!1sen!2s"
                height="370"  loading="lazy" style={{width: "330px"}}
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </Box>
    )
}
