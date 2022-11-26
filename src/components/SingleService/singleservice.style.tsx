import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    singleWrapper: {
        width: "100%",
    },
    contentWrapper: {
        maxWidth: "1330px",
        margin: "50px auto",
    },
    singleContent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        '@media(max-width: 650px)': {
            flexDirection: "column",
        },
    },
    boxSidebar:{
        flex: 0.25,
        '@media(max-width: 650px)': {
            flex: 1,
            maxWidth: "350px",
            margin: "0 auto 50px auto",
        },
    },
    boxContents:{
        flex: 0.7,
        marginLeft: "50px",
        '@media(max-width: 650px)': {
            flex: 1,
            marginLeft: "10px",
        },
    },
    subTitle: {
        fontFamily: 'Federo',
        fontSize: "30px",
        lineHeight: "40px",
        padding: "24px 0",
    },
    desc: {
        fontFamily: 'Federo',
        '@media(max-width: 650px)': {
            paddingRight: "10px",
        }
    },
}))
