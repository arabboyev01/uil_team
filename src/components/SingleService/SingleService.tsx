import {Box} from "@mui/system";
import useStyles from "./singleservice.style";
import {useState} from "react";
import saveData from "../../reusiable/SaveData";
import {SERVICE_DATA} from "../../reusiable/Services/serviceData";
import PageHeader from "../../reusiable/PageHeader/PageHeader";

export default function SingleService({data}: any){
    const classes = useStyles();
    const [mainData, setMainData] = useState([]);
    saveData(data,SERVICE_DATA,setMainData);
    return(
        <Box className={classes.singleWrapper}>
            {mainData.map((item: { name: any;image: any; }) =>
                <PageHeader text={item.name} image={item.image} />
            )}
        </Box>
    )
}
