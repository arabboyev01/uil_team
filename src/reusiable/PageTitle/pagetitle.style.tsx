import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    pageTitleWrapper: {
        position: "absolute",
        top: "194px",
        left: "40%",
        maxWidth: "500px",
        '@media(max-width: 900px)': {
            top: "104px",
            left: "25%",
        },
    },
    titleText: {
        fontFamily: 'Federo',
        fontWeight: 400,
        fontSize: "50px",
        lineHeight: "60px",
        '@media(max-width: 650px)': {
            fontSize: "30px",
            lineHeight: "40px",
        },
    },
}))
