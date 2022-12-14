import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    pageTitleWrapper: {
        maxWidth: "500px",
        margin: "194px auto 0 auto",
        '@media(max-width: 900px)': {
            maxWidth: "435px",
            marginTop: "84px",
        },
    },
    titleText: {
        fontFamily: 'Federo',
        fontWeight: 400,
        fontSize: "50px !important",
        lineHeight: "60px !important",
        '@media(max-width: 650px)': {
            fontSize: "30px",
            lineHeight: "40px",
            textAlign: "center",
        },
    },
}))
