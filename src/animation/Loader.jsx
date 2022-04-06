import { motion } from 'framer-motion'

const container = {
   width: '100%',
   height: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}

const containerStyle = {
   width: '2em',
   height: '2em',
   display: 'flex',
   justifyContent: 'space-around'
}

const pointStyle = {
   width: '.5em',
   height: '.5em',
   backgroundColor: 'blue',
   borderRadius: '.25em'
}

const containerVariants = {
   hidden: {
      transition: {
         staggerChildren: 0.2,
      }
   },
   visible: {
      transition: {
         staggerChildren: 0.1,
      }
   }
}

const pointVariants = {
   hidden: {
      y: '0%'
   },
   visible: {
      y: '100%'
   }
}

const pointTransition = {
   duration: 0.8,
   repeat: 'Infinity',
   ease: 'circInOut'
}

const Loader = () => {
   return (
      <div style={container}>
         <motion.div style={containerStyle} variants={containerVariants} initial="hidden" animate="visible" >
            <motion.span style={pointStyle} variants={pointVariants} transition={pointTransition} />
            <motion.span style={pointStyle} variants={pointVariants} transition={pointTransition} />
            <motion.span style={pointStyle} variants={pointVariants} transition={pointTransition} />
         </motion.div>
      </div>
   )
}

export default Loader