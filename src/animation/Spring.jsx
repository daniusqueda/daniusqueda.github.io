import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {
        opacity: 0,
        x: '-10vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
        }
    },
    exit: {
        opacity: 0,
        x: '10vw',
        transition: {
            type: 'easeInOut',
        }
    }
}

const Spring = ({ children }) => {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            {children}
        </motion.div>
    )
}

export default Spring
