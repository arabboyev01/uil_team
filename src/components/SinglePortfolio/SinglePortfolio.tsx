import {useEffect, useState} from "react";
import {Box} from "@mui/system";
import mainBg from "../../../public/assets/images/serviceBg.png";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import useStyles from "./single.style";
import PortfolioItems from "./PortfolioItems/PortfolioItems";
import saveData from "../../reusiable/SaveData";
import {PORTFOLIO_DATA} from "../../reusiable/Portfolios/portfolio.data";
export default function SinglePortfolio({data}: any){
    const classes = useStyles();
    const [mainData, setMainData] = useState([]);
    saveData(data,PORTFOLIO_DATA,setMainData);
    return(
        <Box>
            {mainData.map((item: { name: any; }) =>
                <PageHeader text={item.name} image={mainBg} />
            )}
            <Box className={classes.contentWrapper}>
                <PortfolioItems data={mainData}/>
            </Box>
        </Box>
    )
}
