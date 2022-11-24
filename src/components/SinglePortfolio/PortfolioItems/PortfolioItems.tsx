import {Box} from "@mui/system";
import useStyles from "./items.style"
import Image from "next/image";
import {useMediaQuery} from "@mui/material";
export default function PortfolioItems({data}:  any){
    const classes = useStyles();
    const query = useMediaQuery('(max-width: 650px)')
    return(
        <Box className={classes.itemsWrapper}>
            {data.map((item: {image: any;}) =>
                <Image src={item.image.src} alt="image" className={classes.mainImage} width={query ? 320 : 1200} height={400}/>
            )}
        </Box>
    )
}
