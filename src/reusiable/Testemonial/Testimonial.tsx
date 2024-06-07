import useStyles from "./testimonial.style";
import { Box } from "@mui/system";
import MainTitle from "../Title/Title";
import { TESTIMONIAL_DATA } from "./testimonial.data";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function Testimonial() {
    const classes = useStyles();
    return (
        <Box className={classes.testimonialWrapper}>
            <Box className={classes.testimonialContentWrapper}>
                <Box className={classes.title}>
                    <MainTitle title="Biz haqimizda boshqalar nima deydi ?" />
                </Box>
                <Box className={classes.testimonials}>
                    {TESTIMONIAL_DATA.map(item =>
                        <Box className={classes.singleTestimonial} key={item.id}>
                            <Typography className={classes.description}>{item.description}</Typography>
                            <Box className={classes.testimonialFooter}>
                                <Image src={item.image} alt="image" width={90} height={90} />
                                <Typography className={classes.name}>{item.name}</Typography>
                                <Typography className={classes.footerTitle}>{item.title}</Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
