import {Box} from "@mui/system";
import useStyles from "./singleservice.style";
import {useEffect, useState} from "react";
import saveData from "../../reusiable/SaveData";
import {SERVICE_DATA} from "../../reusiable/Services/serviceData";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import Image from "next/image";
import {Typography, useMediaQuery} from "@mui/material";
import Sidebar from "./SideBar/SideBar";
import Footer from "../../reusiable/Footer/Footer";

export default function SingleService({data}: any){
    const myId = typeof window !== "undefined" ? window.localStorage.getItem("id") : undefined;
    const classes = useStyles();
    const query = useMediaQuery('(max-width: 650px)');
    const [mainData, setMainData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [callData, setCallData] = useState([]);
    const [initId, setInitId] = useState(myId);

    saveData(data,SERVICE_DATA,setMainData);

    const handleFilterData = function(btnId: any){
        setInitId(btnId);
        const filtered = SERVICE_DATA.filter((item: any) => item.category === btnId);
        // @ts-ignore
        setFiltered(filtered);
    }

    useEffect(() => {
        // @ts-ignore
        const tern = filtered.length === 0 ? mainData : filtered;
        setCallData(tern)
    }, [mainData, filtered]);

    return(
        <Box className={classes.singleWrapper}>
            {callData.map((item: { name: any;image: any;mainImage:any;desc: string; }) =>
                <>
                <PageHeader text={item.name} image={item.image} />
                <Box className={classes.contentWrapper}>
                 <Box className={classes.singleContent}>
                    <Box className={classes.boxSidebar}>
                        <Sidebar handleFilterData={handleFilterData} initId={initId}/>
                    </Box>
                    <Box className={classes.boxContents}>
                        <Image src={item.mainImage} alt="image" width={ query ? 350 : 900} height={query ? 300 : 500}/>
                        <Typography className={classes.subTitle}>{item.name}</Typography>
                        <Typography className={classes.desc}>{item.desc}</Typography>
                    </Box>
                 </Box>
                </Box>
                    <Footer />
                </>
            )}
        </Box>
    )
}
