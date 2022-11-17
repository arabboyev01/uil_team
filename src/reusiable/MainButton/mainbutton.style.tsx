import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    mainButton: {
        color: "#fff",
        border: "1px solid #bf0000",
        borderRadius: 0,
        fontSize: "14px",
        lineHeight: "36px",
        padding: "1rem 3rem",
        '@media(max-width: 650px)': {
            lineHeight: "25px",
            padding: "0.6rem 2rem",
        }
    },
}))
