import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    employees: [],
};

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
            localStorage.setItem('employees', JSON.stringify(state.employees));
        },
        getEmployee: (state) => {
            if (!localStorage.getItem('employees')) localStorage.setItem('employees', JSON.stringify([]));
            state.employees = JSON.parse(localStorage.getItem('employees'));
        },
    },
});

export const { addEmployee, getEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
