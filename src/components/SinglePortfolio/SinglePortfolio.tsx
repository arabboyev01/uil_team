import {Box} from "@mui/system";
import mainBg from "../../../public/assets/images/serviceBg.png";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import useStyles from "./single.style";
import PortfolioItems from "./PortfolioItems/PortfolioItems";
export default function SinglePortfolio({data}: any){
    const classes = useStyles();
    return(
        <Box>
            {data.map((item: { name: any; }) =>
                <PageHeader text={item.name} image={mainBg} />
            )}
            <Box className={classes.contentWrapper}>
                <PortfolioItems data={data}/>
            </Box>
        </Box>
    )
}
