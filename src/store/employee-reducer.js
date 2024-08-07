import {createSlice} from '@reduxjs/toolkit';

export const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: [
            {
                firstName: 'John',
                lastName: 'Doe',
                startDate: {startDate: '2021-01-01'},
                department: 'Engineering',
                dateOfBirth: {startDate: '1990-01-01'},
                street: '123 Main St',
                city: 'Springfield',
                state: 'IL',
                zipCode: '62701',
            },
            {
                firstName: 'AJohn',
                lastName: 'ADoe',
                startDate: {startDate: '2021-01-01'},
                department: 'Engineering',
                dateOfBirth: {startDate: '1990-01-01'},
                street: '123 Main St',
                city: 'Springfield',
                state: 'IL',
                zipCode: '62701',
            },
            {
                firstName: 'zJohn',
                lastName: 'zDoe',
                startDate: {startDate: '2021-01-01'},
                department: 'Engineering',
                dateOfBirth: {startDate: '1990-01-01'},
                street: '123 Main St',
                city: 'Springfield',
                state: 'IL',
                zipCode: '62701',
            },
        ],
    },
    reducers: {
        addEmployee: (state, action) => {
            const newEmployee = action.payload
            state.employees.push(newEmployee);
        },
        sortEmployee: (state, action) => {
            state.employees.sort((a, b) => {
                if (a[action.payload] < b[action.payload]) return -1;
                if (a[action.payload] > b[action.payload]) return 1;
                return 0;
            });
        },
    }
});

export const { addEmployee, sortEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;
