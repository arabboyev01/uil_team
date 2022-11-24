import {Box} from "@mui/system";
import useStyles from "./brochure.style";
import {Typography} from "@mui/material";
import MainButton from "../MainButton/MainButton";
import Link from "next/link";
export default function Brochure({data}: any){
    const classes = useStyles();
    return(
        <Box className={classes.brochureWrapper}>
            <Box className={classes.brochureContextWrapper}>
                <Box className={classes.brochureImage} style={{backgroundImage: `url(${data.image.src})`}}></Box>
                <Box className={classes.brochureText}>
                    <Typography className={classes.subtitle}>{data.subTitle}</Typography>
                    <Typography className={classes.title}>{data.title}</Typography>
                    <Typography className={classes.description}>{data.description}</Typography>
                    <Typography className={classes.offer}>{data.offer}</Typography>
                    <Box className={classes.btns}>
                        <Link href="/about" style={{ textDecoration: 'none' }}>
                           <MainButton name="Barchasi"/>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
