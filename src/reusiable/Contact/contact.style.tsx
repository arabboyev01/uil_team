import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    contactWrapper: {
        width: "100%",
    },
    contactContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 30px",
        },
    },
    contacts: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(350px, 1fr))`,
        gridGap: "20px",
        padding: "100px 0 100px 0",
        '@media(max-width: 650px)': {
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridGap: "10px",
            padding: "40px 0 50px 0",
        },
    },
    contact: {
        background: "#fff",
        color: "#000",
        padding: "50px",
    },
    title: {
        fontFamily: 'Federo',
        fontSize: "20px",
        lineHeight: "30px",
        textTransform: "uppercase",

    },
    description: {
        fontFamily: 'Federo',
        fontSize: "16px",
        lineHeight: "24px",
        paddingTop: "50px",
        '@media(max-width: 650px)': {
            paddingTop: "25px",
        },
    },
}))
