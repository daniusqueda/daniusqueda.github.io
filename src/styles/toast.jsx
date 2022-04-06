import { Toaster } from 'react-hot-toast'

const Toast = () => {
   const styleToaster = {
      background: 'rgba(0,0,0,.5)',
      backdropFilter: 'blur(25px)',
      boxShadow: '0 0 3px #fff',
      color: '#fff',
   }
   return <Toaster toastOptions={{ style: styleToaster }} />
}

export default Toast