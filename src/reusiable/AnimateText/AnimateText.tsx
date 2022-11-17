import { motion } from "framer-motion";
export default function AnimatedText({children, delay} :any){
    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{delay: delay, scale: {
                type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
            }}}
        >
            {children}
        </motion.div>
    )
}
