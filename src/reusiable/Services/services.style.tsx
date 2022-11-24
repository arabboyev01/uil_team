import {makeStyles} from "@mui/styles";
import serviceWrapper from "../../../public/assets/images/services.png";
export default makeStyles(() => ({
    serviceWrapper: {
        position: 'relative',
        backgroundImage: `url(${serviceWrapper.src})`,
        backgroundSize: "cover",
        backgroundColor: '#DD0429',
    },
    serviceContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
    },
    titleWrapper: {
        maxWidth: "486px",
        paddingTop: "144px",
        '@media(max-width: 650px)': {
            paddingTop: "84px",
            paddingLeft: "30px",
        },
    },
    serviceItems:{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(360px, 1fr))`,
        gridGap: "20px",
        padding: "50px 0 100px 0",
        '@media(max-width: 650px)': {
            gridTemplateColumns: `repeat(auto-fit, minmax(330px, 1fr))`,
            gridGap: "10px",
            padding: "40px 0 50px 0",
        },
    },
    serviceItem:{
        background: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "166px",
        boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.5)",
        '@media(max-width: 650px)': {
            maxWidth: "350px",
            margin: "0 auto",
            padding: "0 70px",
            height: "100px",
        },
        '&:hover':{
            scale: "1.02",
            boxShadow: "5px 5px 35px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
        },
    },
    pageLink: {
        background: "#000",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: "166px",
        boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.5)",
        '@media(max-width: 650px)': {
            maxWidth: "350px",
            margin: "0 auto",
            padding: "0 75px",
            height: "100px",
        },
        '&:hover':{
            scale: "1.02",
            boxShadow: "5px 5px 35px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
        },
    },
    itemName: {
        color: "#000",
        fontFamily: 'Federo',
        maxWidth: "128px",
        fontSize: "20px",
        lineHeight: "25px",
        fontWeight: 400,
    },
    linkName: {
        color: "#fff",
        fontFamily: 'Federo',
        maxWidth: "128px",
        fontSize: "20px",
        lineHeight: "25px",
        fontWeight: 400,
    },
    arrowIcon: {
        fontSize: "3rem",
    },
}));
