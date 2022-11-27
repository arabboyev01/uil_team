import {Box} from "@mui/system";
import useStyles from "./sidebar.style"
import {SERVICE_DATA} from "../../../reusiable/Services/serviceData";
import {Typography} from "@mui/material";
import Image from "next/image";
import icon from "../../../../public/assets/services/phone_icon.png"
export default function Sidebar({handleFilterData, initId}: any){
    const classes = useStyles();
    return(
        <>
        <Box className={classes.sideBarWrapper}>
            <Typography className={classes.title1}>Yo&#39;nalishlarimiz</Typography>
            {SERVICE_DATA.map(item =>
              <Typography className={initId == item.id ? classes.activeItem : classes.item} onClick={() => handleFilterData(item.id)} key={item.id}>{item.name}</Typography>
            )}
        </Box>
            <Box className={classes.contact}>
                <Image src={icon} alt={"icon"} width={85} height={85}/>
                <Typography className={classes.title}>Eng yuqori sifat uyg&#39;unligi</Typography>
                <a href="tel: +998999883500" className={classes.call}>(99) 988-35-00</a>
            </Box>
      </>
    )
}
