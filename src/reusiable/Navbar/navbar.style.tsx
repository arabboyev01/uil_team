import {makeStyles} from "@mui/styles";
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
        '@media(max-width: 1330px)': {
            padding: "20px",
        },
        '@media(max-width: 650px)': {
            padding: "17px 25px",
        }
    },
    logo: {
        color: "#ccc",
        fontSize: "44px !important",
        lineHeight: "45px !important",
        fontWeight: 600,
        textDecoration: "none !important",
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
        right: "0",
        top: "0",
        height: "100vh",
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        '@media(max-width: 650px)': {
            display: "block",
        }
    },
    hamburgerMenu: {
        display: "none",
        '@media(max-width: 650px)': {
            display: "block",
            zIndex: 100,
        },
    },
    navItem: {
        margin: "0 20px",
        cursor: "pointer",
        color: "#fff",
        textDecoration: "none",
        '@media(max-width: 650px)': {
            position: "absolute",
            right: "90px",
            top: "50px",
        }
    },
    activeNavItem: {
        margin: "0 20px",
        cursor: "pointer",
        color: "#bf0000",
        textDecoration: "none",
        '@media(max-width: 650px)': {
            margin: "20px 0",
        }
    }
}));
