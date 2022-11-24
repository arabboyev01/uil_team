import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    mentorsWrapper: {},
    mentorContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
    },
    mentorsTitle: {
        maxWidth: "700px",
        paddingTop: "144px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "30px",
        '@media(max-width: 650px)': {
            paddingTop: "84px",
            paddingLeft: "30px",
            flexDirection: "column",
            alignItems: "start",
        },
    },
    mentors: {
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`,
        gridRowGap: "20px",
        padding: "40px 0",
    },
    mentor: {
        width: "300px",
        height: "300px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.5)",
        '&:hover':{
            scale: "1.02",
            boxShadow: "5px 5px 35px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
        },
        '@media(max-width: 560px)': {
            maxWidth: "350px",
            maxHeight: "350px",
            margin: "0 auto",
        }
    },
}))
