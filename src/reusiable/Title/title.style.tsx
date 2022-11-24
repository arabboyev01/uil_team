import {makeStyles} from "@mui/styles";
export default makeStyles((theme) => ({
    title: {
        fontWeight: 400,
        fontSize: "50px",
        lineHeight: "60px",
        textTransform: "uppercase",
        fontFamily: "Federo",
        '@media(max-width: 540px)': {
            fontSize: "25px",
            lineHeight: "30px",
        },
    },
}));
