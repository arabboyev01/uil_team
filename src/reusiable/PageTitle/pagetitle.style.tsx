import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    pageTitleWrapper: {
        maxWidth: "500px",
        margin: "194px auto 0 auto",
        '@media(max-width: 900px)': {
            maxWidth: "350px",
            marginTop: "104px",
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
