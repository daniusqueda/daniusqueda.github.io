import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'easeInOut',
        }
    },
    exit: {
        opacity: 0,
        scale: 0,
        transition: {
            type: 'easeInOut',
        }
    }
}

const Push = ({ children }) => {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {children}
        </motion.div>
    )
}
export default Push