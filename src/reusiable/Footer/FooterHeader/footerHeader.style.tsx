import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    footerWrapper: {
        width: "100%",
    },
    footerContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        padding: "30px 0",
        '@media(max-width: 1330px)': {
            padding: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
        },
    },
    contactInfo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        '@media(max-width: 650px)': {
            paddingTop: "20px",
        },
    },
    contactTitle: {
        paddingBottom: "42px",
        fontFamily: 'Federo',
        fontSize: "18px",
        fontWeight: 600,
        '@media(max-width: 650px)': {
            paddingBottom: "32px",
        },
    },
    adress: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: 'Federo',
        color: "#807E85",
        cursor: "pointer",
        '&:hover':{
            color: "#ddd",
        },
    },
    phone: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10px",
        fontFamily: 'Federo',
        color: "#807E85",
        cursor: "pointer",
        '&:hover':{
            color: "#ddd",
        },
    },
    email: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: "10px",
        fontFamily: 'Federo',
        color: "#807E85",
        cursor: "pointer",
        '&:hover':{
            color: "#ddd",
        },
    },
    links: {
        fontFamily: 'Federo',
        color: "#807E85",
        fontSize: "15px",
        lineHeight: "30px",
        fontWeight: 500,
        cursor: "pointer",
        '&:hover':{
            color: "#ddd",
        },
    },
    mapWrapper:{
        maxWidth: "400px",
        maxHeight: "200px",
        overflow: "hidden",
        '@media(max-width: 650px)': {
            maxWidth: "320px",
        }
    },
}))
