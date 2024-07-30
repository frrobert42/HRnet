import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from "./employee-reducer";

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
    },
})
