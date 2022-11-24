import useStyles from "./offer.style";
import {Box} from "@mui/system";
import {EFFORT_DATA} from "../../dumbData/dumbData";
import Image from "next/image";
import MainTitle from "../Title/Title";
import {Typography} from "@mui/material";

export default function Offer(){
    const classes = useStyles();
    return(
        <Box className={classes.offerWrapper}>
            <Box className={classes.offerContentWrapper}>
                <Box className={classes.titleWrapper}>
                    <MainTitle title="Biz nimani taklif qila olamiz." />
                </Box>
                <Box className={classes.offers}>
                    {EFFORT_DATA.map(item =>
                        <Box className={classes.offer} key={item.id}>
                            <Image src={item.icon} alt="icon" className={classes.images}/>
                            <Typography className={classes.description}>{item.description}</Typography>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
