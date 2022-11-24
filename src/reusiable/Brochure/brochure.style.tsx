import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    brochureWrapper: {
        width:"100%",
    },
    brochureContextWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "487px",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
        '@media(max-width: 650px)': {
            flexDirection: "column",
            padding: "30px",
            height: "700px",
        },
    },
    brochureImage: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flex: 0.5,
        '@media(max-width: 650px)': {
            flex: 1,
        },
    },
    brochureText: {
        flex: 0.5,
        paddingLeft: "100px",
        '@media(max-width: 650px)': {
            flex: 1,
            paddingLeft: 0,
        },
    },
    subtitle: {
        color: "#DD0429",
        '@media(max-width: 650px)': {
            paddingTop: "10px",
        },
    },
    title: {
        fontSize: "50px",
        fontWeight: 400,
        lineHeight: "60px",
        paddingTop: "10px",
        fontFamily: 'Federo',
        '@media(max-width: 650px)': {
            fontSize: "30px",
            fontWeight: 400,
            lineHeight: "40px",
        },
    },
    description: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "20px",
        paddingTop: "33px",
        fontFamily: 'Federo',
    },
    offer: {
        color: "#DD0429",
        fontSize: "22px",
        fontWeight: 400,
        lineHeight: "24px",
        paddingTop: "39px",
        fontFamily: 'Federo',
    },
    btns: {
        paddingTop: "60px",
        '@media(max-width: 650px)': {
            paddingTop: "40px",
        },
    }
}))
