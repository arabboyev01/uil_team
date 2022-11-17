import {useState} from "react";
import {Box} from "@mui/system";
import useStyles from "./navbar.style";
import {Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {NAV_DATA} from "./navData";
import AnimatedText from "../AnimateText/AnimateText";
import { useRouter } from "next/router";
export default function Navbar(){
    const classes = useStyles();
    const [mobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {setMobileMenu(!mobileMenu)};
    const router = useRouter();
    return(
        <Box className={classes.navWrapper}>
            <Box className={classes.navContentWrapper}>
                <AnimatedText delay='1'>
                    <Typography className={classes.logo}>UIL.</Typography>
                </AnimatedText>
                <Box className={mobileMenu ? classes.mobileMenu : classes.collapseMenu}>
                    {NAV_DATA.map(item =>
                      <AnimatedText  key={item.id} delay={item.transition}>
                        <Typography className={router.pathname === item.link ? classes.activeNavItem : classes.navItem}>{item.name}</Typography>
                      </AnimatedText>
                    )}
                </Box>
                <Box className={classes.hamburgerMenu} onClick={handleMobileMenu}>
                    <AnimatedText>
                        {mobileMenu ? <CloseIcon /> : <MenuIcon />}
                    </AnimatedText>
                </Box>
            </Box>
        </Box>
    )
}
