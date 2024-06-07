import useStyles from "./mentor.style";
import {Box} from "@mui/system";
import {MENTORS_DATA} from "../../dumbData/dumbData";
import MainTitle from "../Title/Title";
import { useRouter } from "next/router";

export default function Mentors(){
    const classes = useStyles()
    const router = useRouter()
    return(
        <Box className={classes.mentorsWrapper}>
            <Box className={classes.mentorContentWrapper}>
                <Box className={classes.mentorsTitle}>
                    <MainTitle title="Bizning jamoa a&apos;zolari bilan tanishing" />
                </Box>
                <Box className={classes.mentors}>
                    {MENTORS_DATA.map(item =>
                        <div key={item.id} onClick={() => router.push(`/mentor/${item.name}`)}>
                           <Box className={classes.mentor} style={{backgroundImage: `url(${item.image.src})`}}></Box>
                        </div>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
