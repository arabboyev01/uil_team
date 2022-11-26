import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    singleMentorWrapper: {
    },
    singleContent: {
        maxWidth: "1330px",
        margin: "80px auto 0  auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        '@media(max-width: 650px)': {
            flexDirection: "column",
        },
    },
    boxContent: {
        paddingLeft: "50px",
        '@media(max-width: 650px)': {
            paddingLeft: "20px",
        },
    },
    name: {
        fontSize: "40px",
        lineHeight: "50px",
        fontFamily: 'Federo',
        '@media(max-width: 650px)': {
            fontSize: "30px",
            lineHeight: "40px"
        },
    },
    image: {
        '@media(max-width: 650px)': {
            margin: "0 auto",
        },
    },
    job: {
        fontSize: "20px",
        lineHeight: "25px",
        fontFamily: 'Federo',
        paddingTop: "20px",
    },
    desc: {
        paddingTop: "50px",
        fontSize: "18px",
        lineHeight: "28px",
        fontFamily: 'Federo',
    },
    itemName: {
        color: "#fff",
    },
}))
