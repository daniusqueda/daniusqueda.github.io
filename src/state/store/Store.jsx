import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import aboutSlice from '../slices/aboutSlice';
import authSlice from '../slices/authSlice';
import educationSlice from '../slices/educationSlice';
import experienceSlice from '../slices/experienceSlice';
import portfolioSlice from '../slices/portfolioSlice';

const store = configureStore({
   reducer: {
      about: aboutSlice,
      auth: authSlice,
      education: educationSlice,
      experience: experienceSlice,
      portfolio: portfolioSlice
   }
})

const Store = ({children}) => {
  return (
    <Provider store={store}>
       {children}
    </Provider>
  )
}

export default Store