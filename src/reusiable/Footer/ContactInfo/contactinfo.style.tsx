import {makeStyles} from "@mui/styles";
import dot from "../../../../public/assets/icons/dots.png";
export default makeStyles(() => ({
    contactInfoWrapper: {
        width: "100%",
        height: "184px",
        backgroundImage: `url(${dot.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        '@media(max-width: 650px)': {
            height: "auto",
        }
    },
    contactContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
        '@media(max-width: 650px)': {
            flexDirection: "column",
            alignItems: "start",
            padding: "0 0 30px 30px",
        },
    },
    contactInfo: {
        paddingTop: "40px",
    },
    contactHead: {
        fontSize: "34px",
        lineHeight: "36px",
        fontWeight: 400,
        '@media(max-width: 650px)': {
            fontSize: "24px",
            lineHeight: "26px",
        },
    },
    phone: {
        color: "red",
        textDecoration: "none",
        fontSize: "20px",
        lineHeight: "34px",
    },
    contactIcons: {
        letterSpacing: "10px",
        '@media(max-width: 650px)': {
            margin: "10px 0",
        },
    },
    icon: {
        marginRight: "10px",
    }
}))
