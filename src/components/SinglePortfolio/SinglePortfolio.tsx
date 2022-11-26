import {useEffect, useState} from "react";
import {Box} from "@mui/system";
import mainBg from "../../../public/assets/images/serviceBg.png";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import useStyles from "./single.style";
import PortfolioItems from "./PortfolioItems/PortfolioItems";
import {PORTFOLIO_DATA} from "../../reusiable/Portfolios/portfolio.data";
export default function SinglePortfolio({data}: any){
    const classes = useStyles();
    const myId = typeof window !== "undefined" ? window.localStorage.getItem("id") : undefined;
    const [initData, setInitData] = useState([]);
    const [mainData, setMainData] = useState([]);
    console.log(data);
    useEffect(() => {
        const filtered = PORTFOLIO_DATA.filter((item: any) => item.category == myId);
        // @ts-ignore
        setInitData(filtered)
    }, [])
    console.log(initData);
    useEffect(() => {
        const mainData = data === undefined ? initData : data;
        setMainData(mainData)
    }, [ myId, initData]);
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
