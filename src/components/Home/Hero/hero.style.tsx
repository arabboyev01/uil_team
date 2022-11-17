import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    heroWrapper: {
        maxWidth: "800px",
        margin: "50px auto 0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    heroHeading: {
        fontFamily: "'Federo', sans-serif",
        fontSize: "150px",
        lineHeight: "160px",
        textAlign: "center",
        fontWeight: 400,
        '@media(max-width: 650px)': {
            fontSize: "50px",
            lineHeight: "55px",
        }
    },
    buttonWrapper: {
        marginTop: "46px",
    }
}))
