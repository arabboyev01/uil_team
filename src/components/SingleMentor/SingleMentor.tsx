import useStyles from "./singlementor.style";
import {Box} from "@mui/system";
import {useState} from "react";
import saveData from "../../reusiable/SaveData";
import {MENTORS_DATA} from "../../dumbData/dumbData";
import PageHeader from "../../reusiable/PageHeader/PageHeader";

export default function SingleMentor({data}: any){
    const classes = useStyles();
    const [mainData, setMainData] = useState([]);
    saveData(data,MENTORS_DATA,setMainData)
    return(
        <Box className={classes.singleMentorWrapper}>
            {mainData.map((item: { name: any; bgImage: any;}) =>
                <PageHeader text={item.name} image={item.bgImage} />
            )}
        </Box>
    )
}
