import {makeStyles} from "@mui/styles";

export default makeStyles(() => ({
    contentWrapper:{
        maxWidth: "1330px",
        margin:"0 auto",
        '@media(max-width: 1330px)': {
            padding: "0 20px",
        }
    },
}))
