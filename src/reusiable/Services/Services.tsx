import {useContext} from "react";
import {Box} from "@mui/system";
import useStyles from "./services.style";
import MainTitle from "../Title/Title";
import {  SERVICE_DATA } from "./serviceData";
import Image from "next/image";
import {Typography} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import CreateContextApi from "../../context/createContext";
import ServiceFuntions from "./service.funtions";
import Link from "next/link";
export default function Services(){
    const changeCtx = useContext(CreateContextApi);
    const {changeServices} = changeCtx;
    const classes = useStyles();
    const handleChangeServices = function(btnId: any){
        const filteredData = ServiceFuntions(btnId);
        // @ts-ignore
        changeServices(filteredData);
        window.localStorage.setItem("id",btnId);
    }
    return(
        <Box className={classes.serviceWrapper}>
            <Box className={classes.serviceContentWrapper}>
                <Box className={classes.titleWrapper}>
                    <MainTitle title="Bizning xizmatlar bilan tanishing"/>
                </Box>
                <Box className={classes.serviceItems}>
                    { SERVICE_DATA.map(item =>
                        <Link href="/single-service" style={{ textDecoration: 'none' }} key={item.id}>
                        <Box className={classes.serviceItem} onClick={() => handleChangeServices(item.id)}>
                            <Typography className={classes.itemName}>{item.name}</Typography>
                            <Image src={item.icons} alt="icons" width={55} height={55} />
                        </Box>
                        </Link>
                    )}
                    <Link href="/services" style={{ textDecoration: 'none' }}>
                      <Box className={classes.pageLink}>
                        <Typography className={classes.linkName}>
                           Barcha xizmatlarimiz bilan tanishing
                        </Typography>
                        <ArrowRightAltIcon className={classes.arrowIcon}/>
                      </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
