import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employee: [],
}

export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employee.push(action.payload)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addEmployee } = employeeSlice.actions

export default employeeSlice.reducer
