import useStyles from "./singlementor.style";
import {Box} from "@mui/system";
import {useState} from "react";
import saveData from "../../reusiable/SaveData";
import {MENTORS_DATA} from "../../dumbData/dumbData";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import Image from "next/image";
import {Typography} from "@mui/material";
import Footer from "../../reusiable/Footer/Footer";

export default function SingleMentor({data}: any) {
    const classes = useStyles();
    const [mainData, setMainData] = useState([]);
    saveData(data, MENTORS_DATA, setMainData)
    return (
        <Box className={classes.singleMentorWrapper}>
            {mainData.map((item: { name: any; bgImage: any; image: any; job: string; desc: any; skills: any,id: number; }) =>
                <Box key={item.id}>
                    <PageHeader text={item.name} image={item.bgImage}/>
                    <Box className={classes.singleContent} key={item.id}>
                        <Image src={item.image} alt="image" width={350} height={350} className={classes.image}/>
                        <Box className={classes.boxContent}>
                            <Typography className={classes.name}>{item.name}</Typography>
                            <Typography className={classes.job}>{item.job}</Typography>
                            <Typography className={classes.desc}>{item.desc}</Typography>
                        </Box>
                    </Box>
                </Box>
            )}
            <Footer />
        </Box>
    )
}
