import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    contactMap: {
        maxWidth: "100%",
        margin: "0 auto",
        maxHeight: "500px",
        '@media(maxWidth: 650px)': {
            maxWidth: "100%",
        },
    },
}))
