import { configureStore } from '@reduxjs/toolkit'
import userReducer from './CrudSlice'

export const store = configureStore({
    reducer: {
        users: userReducer   
    }
})



