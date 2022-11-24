import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    pageContentWrapper: {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "550px",
        width: "100%",
        '@media(max-width: 650px)': {
                height: "350px",
        },
    },
    mainTextWrapper: {
        position: "relative",
    },
}))
