import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    testimonialWrapper: {
        width: "100%",
        height: "auto",
    },
    testimonialContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
    },
    title: {
        maxWidth: "700px",
        marginTop: "100px",
        '@media(max-width: 650px)': {
            maxWidth: "350px",
            paddingLeft: "30px",
            marginTop: "50px",
        },
    },
    testimonials: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        '@media(max-width: 650px)': {
            flexDirection: "column",
        }
    },
    singleTestimonial: {
        position: "relative",
        maxWidth: "370px",
        margin: "47px auto",
        background: "#fff",
        '@media(max-width: 650px)': {
            maxWidth: "350px",
            margin: "60px auto",
        },
    },
    testimonialFooter: {
        position: "absolute",
        left: "50px",
        bottom: "-100px",
    },
    description: {
        padding: "60px",
        fontSize: "18px",
        lineHeight: "38px",
        color: "#000",
        '@media(max-width: 650px)': {
           padding: "50px 20px",
            fontSize: "16px",
            lineHeight: "20px",
        }
    },
    name: {
        fontFamily: 'Federo',
        fontSize: "20px",
        lineHeight: "24px",
        textTransform: "uppercase",
    },
    footerTitle: {
        color: "#DD0429",
        fontSize: "16px",
        lineHeight: "20px",
    },
}))
