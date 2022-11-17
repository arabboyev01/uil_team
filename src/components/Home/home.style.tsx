import {makeStyles} from "@mui/styles";
import mainBgImage from "../../../public/assets/images/main-bg.png";
export default makeStyles((theme) => ({
    homeWrapper: {
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${mainBgImage.src})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        '@media(max-width: 650px)': {
            maxHeight: "370px",
        },
    },
}))
