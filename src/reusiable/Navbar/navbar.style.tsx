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
        zIndex: 3,
        '@media(max-width: 650px)': {
            fontSize: "22px !important",
        },
    },
    collapseMenu: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        '@media(max-width: 650px)': {
            display: "none",
            transition: " height 2s !important",
        }
    },
    mobileMenu: {
        display: "none",
        '@media(max-width: 650px)': {
            overflow: "hidden",
            position: "fixed",
            right: "0",
            top: "-250px",
            left: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "calc(100vh + 250px)",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            paddingTop: "390px !important",
            zIndex: 2,
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
    },
    itemWrapper: {
        '@media(max-width: 650px)': {
            paddingTop: "20px !important",
        },
    },
    activeNavItem: {
        cursor: "pointer",
        color: "#bf0000",
        textDecoration: "none",
        '@media(max-width: 650px)': {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    }
}));
