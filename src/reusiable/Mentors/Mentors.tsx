import useStyles from "./mentor.style";
import {Box} from "@mui/system";
import {MENTORS_DATA} from "../../dumbData/dumbData";
import MainTitle from "../Title/Title";
import {useContext} from "react";
import CreateContextApi from "../../context/createContext";
export default function Mentors(){
    const classes = useStyles();
    const ctxSetValue = useContext(CreateContextApi);
    const {changeMentor} = ctxSetValue;
    const handleSingleMentor = function(btnId: number){
        const filtered = MENTORS_DATA.filter(item => item.category === btnId);
        // @ts-ignore
        changeMentor(...filtered);
    }
    return(
        <Box className={classes.mentorsWrapper}>
            <Box className={classes.mentorContentWrapper}>
                <Box className={classes.mentorsTitle}>
                    <MainTitle title="Bizning jamoa a'zolari bilan tanishing" />
                </Box>
                <Box className={classes.mentors}>
                    {MENTORS_DATA.map(item =>
                        <Box onClick={() => handleSingleMentor(item.id)} key={item.id} className={classes.mentor} style={{backgroundImage: `url(${item.image.src})`}}>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
