import {configureStore} from '@reduxjs/toolkit'
import instructorParentReducer from './slices/instructorParentSlice'
 export const store=configureStore({
     reducer:{
         instructorParentLoginReducer:instructorParentReducer
     }
 })