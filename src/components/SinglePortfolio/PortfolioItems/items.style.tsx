import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    itemsWrapper: {
        maxWidth: "1330px",
    },
    items: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        justifyContent: "space-between",
        padding: "50px 0",
        '@media(max-width: 650px)': {
            flexDirection: "column",
        },
    },
    imageContainer: {
        flex: 0.5,
        backgroundSize: "cover",
        backgroundPosition: 'center',
        height: "400px",
        '@media(max-width: 650px)': {
            flex: 1,
            maxWidth: "350px",
            height: "300px",
            margin: "0 auto",
        },
    },
    itemDesc: {
        flex: 0.5,
        padding: "0 50px",
        '@media(max-width: 650px)': {
            flex: 1,padding: "0 0",
        },
    },
    itemTitle: {
        fontSize: "36px !important",
        lineHeight: "40px !important",
        fontWeight: 400,
        fontFamily: 'Federo',
    },
    mainImage: {
        objectFit: "cover",
    },
    itemdesc: {
        fontSize: "18px !important",
        margin: "30px 0",
        fontFamily: 'Federo',
    },
    goBTn: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "20px !important",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
}))
