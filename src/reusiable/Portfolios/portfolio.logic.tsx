import {PORTFOLIO_DATA} from "./portfolio.data";

export default function PortfolioFilterData(btnId: number){
    return PORTFOLIO_DATA.filter(item => item.category === btnId);
}
