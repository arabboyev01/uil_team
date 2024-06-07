import useStyles from "./singlementor.style";
import {Box} from "@mui/system";
import {useCallback, useEffect, useState} from "react";
import saveData from "../../reusiable/SaveData";
import {MENTORS_DATA} from "../../dumbData/dumbData";
import PageHeader from "../../reusiable/PageHeader/PageHeader";
import Image from "next/image";
import {Typography} from "@mui/material";
import Footer from "../../reusiable/Footer/Footer";
import { useRouter } from "next/router";
import { MENTORS_DATA_TYPES } from "../../../types";

export default function SingleMentor({data}: any) {
    const { query: { id }} = useRouter()

    const classes = useStyles();
    const [mainData, setMainData] = useState<null|MENTORS_DATA_TYPES| any>(null)

    const makeFilterData = useCallback(() => {
        if (id && MENTORS_DATA){
            const filtered = MENTORS_DATA.find((item: MENTORS_DATA_TYPES) => item.name === id)
            setMainData(filtered)
        }
    }, [id])

    useEffect(() => {
        makeFilterData()
    }, [makeFilterData])

    return (
        <Box className={classes.singleMentorWrapper}>
            {mainData === null && <p>Loading... </p>}
                <Box key={mainData?.id}>
                    <PageHeader text={mainData?.name} image={mainData?.bgImage}/>
                    <Box className={classes.singleContent} key={mainData?.id}>
                        <Image src={mainData?.image} alt="image" width={350} height={350} className={classes.image}/>
                        <Box className={classes.boxContent}>
                            <Typography className={classes.name}>{mainData?.name}</Typography>
                            <Typography className={classes.job}>{mainData?.job}</Typography>
                            <Typography className={classes.desc}>{mainData?.desc}</Typography>
                        </Box>
                    </Box>
                </Box>
            <Footer />
        </Box>
    )
}
