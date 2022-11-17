import {makeStyles} from "@mui/styles";
import {theme} from "../../../theme";
export default makeStyles(() => ({
    navWrapper: {
        background: "transparent",
        width: "100%",
        borderBottom: "0.4px solid rgba(255, 255, 255, 0.5)",
    },
    navContentWrapper: {
        maxWidth: "1330px",
        padding: "17px 0",
        position: "relative",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        '@media(max-width: 650px)': {
            padding: "17px 25px",
        }
    },
    logo: {
        color: "#ccc",
        fontSize: "44px",
        lineHeight: "45px",
        fontWeight: 600,
        '@media(max-width: 650px)': {
            fontSize: "29px",
        },
    },
    collapseMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        '@media(max-width: 650px)': {
            display: "none",
        }
    },
    mobileMenu: {
        display: "none",
        position: "absolute",
        right: "50px",
        top: "90px",
        '@media(max-width: 650px)': {
            display: "block",
        }
    },
    hamburgerMenu: {
        display: "none",
        '@media(max-width: 650px)': {
            display: "block",
        },
    },
    navItem: {
        margin: "0 20px",
        cursor: "pointer",
        '@media(max-width: 650px)': {
            margin: "20px 0",
        }
    },
    activeNavItem: {
        margin: "0 20px",
        cursor: "pointer",
        '@media(max-width: 650px)': {
            margin: "20px 0",
        }
    }
}))
