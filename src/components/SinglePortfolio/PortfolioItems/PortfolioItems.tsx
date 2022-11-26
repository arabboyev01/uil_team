import {Box} from "@mui/system";
import useStyles from "./items.style"
import {Typography} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MainTitle from "../../../reusiable/Title/Title";
export default function PortfolioItems({data}:  any){
    const classes = useStyles();
    return(
        <Box className={classes.itemsWrapper}>
            {data.map((item: {image: any; name: any;description: string;link: string;}) =>
                <>
                <Box className={classes.items}>
                    <Box className={classes.imageContainer} style={{backgroundImage: `url(${item.image.src})`}}>
                    </Box>
                <Box className={classes.itemDesc}>
                    <Typography className={classes.itemTitle}>{item.name}</Typography>
                    <Typography className={classes.itemdesc}>{item.description}</Typography>
                    <a href={item.link} className={classes.goBTn} target="_blank" rel="noreferrer" >Saytga o`&#39;`tish <ArrowRightAltIcon /></a>
                </Box>
                </Box>
                    <MainTitle title="Proyektda qatnashgan dastruchilarimiz" />
                </>
            )}
        </Box>
    )
}
