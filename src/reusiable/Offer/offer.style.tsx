import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    offerWrapper: {
        width: "100%",
    },
    titleWrapper: {
        maxWidth: "486px",
        paddingTop: "144px",
        '@media(max-width: 650px)': {
            paddingTop: "84px",
            paddingLeft: "30px",
        },
    },
    offerContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 30px",
        }
    },
    offers: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(310px, 1fr))`,
        gridGap: "20px",
        padding: "50px 0 100px 0",
        '@media(max-width: 650px)': {
            gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
            gridGap: "10px",
            padding: "40px 0 50px 0",
        },
    },
    offer: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRight: ".5px solid rgba(255, 255, 255, 0.5)",
        '@media(max-width: 650px)': {
            borderRight: "none",
        }
    },
    images: {
        width: "75px",
        height: "75px",
    },
    description: {
        paddingTop: "20px",
        fontSize: "16px",
        lineHeight: "28px",
    },
}))
