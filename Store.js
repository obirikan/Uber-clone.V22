import { configureStore } from '@reduxjs/toolkit'
import navReducer from './slices/navSlice'
//didnt use the store i sed context
export const store = configureStore({
  reducer:{
    nav:navReducer
  },
})
