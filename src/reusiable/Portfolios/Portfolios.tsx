import { useContext} from "react";
import {Box} from "@mui/system";
import useStyles from "./portfolios.style";
import MainTitle from "../Title/Title";
import {PORTFOLIO_DATA} from "./portfolio.data";
import CreateContextApi from "../../context/createContext";
import PortfolioFilterData from "./portfolio.logic";
import MainButton from "../MainButton/MainButton";
import Link from "next/link";
export default function Portfolios(){
    const ctxSetValue = useContext(CreateContextApi);
    const {changeValue} = ctxSetValue;
    const classes = useStyles();
    const handleGetSingleData = function(btnId: any){
        const filteredData = PortfolioFilterData(btnId);
        // @ts-ignore
        changeValue(filteredData);
        window.localStorage.setItem("id",btnId)
    }
    return(
        <Box className={classes.portfolioWrapper}>
            <Box className={classes.portfolioContentWrapper}>
                <Box className={classes.titleWrapper}>
                    <Box className={classes.title}>
                        <MainTitle title="Bizning qilgan ishlarimiz bilan tanishing !" />
                    </Box>
                    <Link href="/projects" style={{ textDecoration: 'none' }}>
                        <MainButton name="Portolio" />
                    </Link>
                </Box>
                <Box className={classes.portfolioItems}>
                    {PORTFOLIO_DATA.map(item =>
                        <Link href="/single-portfolio" style={{ textDecoration: 'none' }} key={item.id}>
                         <Box
                            onClick={() => handleGetSingleData(item.id)}
                            className={classes.portfolioItem}
                            style={{backgroundImage: `url(${item.image.src})`}}
                         >
                         </Box>
                        </Link>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
