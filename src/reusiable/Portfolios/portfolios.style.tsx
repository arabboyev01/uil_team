import {makeStyles} from "@mui/styles";
export default makeStyles(() => ({
    portfolioWrapper: {
      width: "100%",
    },
    portfolioContentWrapper: {
        maxWidth: "1330px",
        margin: "0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        },
    },
    titleWrapper: {
        maxWidth: "100%",
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
    title: {
        maxWidth: "700px",
        '@media(max-width: 650px)': {
            paddingBottom: "10px",
        },
    },
    portfolioItems:{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(360px, 1fr))`,
        gridRowGap: "20px",
        padding: "50px 0 100px 0",
        '@media(max-width: 1330px)': {
            gridTemplateColumns: `repeat(auto-fit, minmax(330px, 1fr))`,
        },
        '@media(max-width: 650px)': {
            gridTemplateColumns: `repeat(auto-fit, minmax(330px, 1fr))`,
            gridGap: "10px",
            padding: "40px 0 50px 0",
        },
    },
    portfolioItem: {
        maxWidth: "420px",
        width: "100%",
        height: "410px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.5)",
        '@media(max-width: 650px)': {
            maxWidth: "330px",
            margin: "0 auto",
            height: "340px",
        },
        '&:hover':{
            scale: "1.02",
            boxShadow: "5px 5px 25px rgba(105,105, 105, 0.5)",
            cursor: "pointer",
        },
    },
}));
