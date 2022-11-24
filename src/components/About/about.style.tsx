import {makeStyles} from "@mui/styles";
import aboutBg from "../../../public/assets/images/about.png";
export default makeStyles(() => ({
    aboutWrapper: {
        width: "100%",
        position: "relative",
    },
    about: {
        position: "relative",
    },
    mainContent: {
        position: "relative",
    },
    mainAbout: {
        padding: "80px 0",
        '@media(max-width: 650px)': {
            padding: "40px 0",
        },
    },
}))
