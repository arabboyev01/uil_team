import {makeStyles} from "@mui/styles";
import contact from "../../../../public/assets/services/contact.png";
export default makeStyles(() => ({
    sideBarWrapper: {
        width: "100%",
        height: "auto",
        background: "#17161A",
        padding: "50px 10px 50px 30px",
        '@media(max-width: 650px)': {
            padding: "10px 70px 10px 70px",
        },
    },
    activeItem: {
        fontSize: "14px !important",
        fontWeight: 400,
        lineHeight: "36px",
        background: "#ddd",
        maxWidth: "260px",
        color: "#000",
        padding: "10px 0 10px 20px",
        cursor: "pointer",
    },
    item: {
        fontSize: "14px !important",
        fontWeight: 400,
        lineHeight: "36px",
        padding: "10px 0 10px 20px",
        cursor: "pointer",
        fontFamily: 'Federo',
    },
    contact: {
        width: "100%",
        height: "307px",
        marginTop: "20px",
        backgroundImage: `url(${contact.src})`,
        backgroundColor: '#DD0429',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 0",
    },
    title1: {
        fontSize: "28px !important",
        lineHeight: "46px !important",
        textAlign: "start",
        fontFamily: 'Federo',
    },
    title: {
        fontSize: "34px !important",
        lineHeight: "46px !important",
        textAlign: "center",
        fontFamily: 'Federo',
    },
    call: {
        color: "#fff",
        fontSize: "20px !important",
        lineHeight: "34px !important",
        textDecoration: "none",
    },
}))
