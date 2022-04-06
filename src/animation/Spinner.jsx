import { motion } from 'framer-motion'

const containerStyle = {
   position: 'relative',
   width: '1em',
   height: '1em',
}

const spinnerStyle = {
   width: '1em',
   height: '1em',
   border: '.2em solid transparent',
   borderTop: '.2em solid white',
   borderRadius: '50%',
   position: 'absolute',
   top: 0,
   left: 0
}

const spinnerAnimate = {
   rotate: 360
}

const spinnerTransition = {
   duration: 1,
   loop: 'Infinity',
}

const Spinner = () => {
   return (
      <div style={containerStyle}>
         <motion.span style={spinnerStyle} animate={spinnerAnimate} transition={spinnerTransition} />
      </div>
   )
}

export default Spinner