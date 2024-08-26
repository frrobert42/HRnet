// eslint-disable-next-line no-unused-vars
import {createSlice, Slice, SliceSelectors} from '@reduxjs/toolkit';
import {employeeData, employeeMockData} from "./employeeData";

let employees = employeeData;

// If dev mode, we add some fake data
if (process.env.REACT_APP_DEVMODE === 'true') employees = employeeMockData;

/**
 * Slice for the employee data
 * @type {Slice<{nbEmployeesPerPage: number, filteredEmployees, employees, tableIndex: number}, {tableIndexDecrement: *, setTableIndex: *, tableIndexIncrement: *, setFilteredEmployees: *, addEmployee: *, setNbEmployeesPerPage: *}, string, string, SliceSelectors<{nbEmployeesPerPage: number, filteredEmployees, employees, tableIndex: number}>>}
 */
export const employeeSlice = createSlice({
    name: 'employees',
    initialState: {
        employees: employees,
        tableIndex: 1,
        nbEmployeesPerPage: 10,
        filteredEmployees: employees
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        setTableIndex: (state, action) => {
            state.tableIndex = action.payload;
        },
        tableIndexIncrement: (state) => {
            state.tableIndex += 1;
        },
        tableIndexDecrement: (state) => {
            if (state.tableIndex > 1) state.tableIndex -= 1;
        },
        setNbEmployeesPerPage: (state, action) => {
            state.tableIndex = 1;
            state.nbEmployeesPerPage = action.payload;
        },
        setFilteredEmployees: (state, action) => {
            state.tableIndex = 1;
            state.filteredEmployees = action.payload || [];
        }
    }
});

export const { addEmployee, setTableIndex, tableIndexDecrement, tableIndexIncrement, setNbEmployeesPerPage, setFilteredEmployees} = employeeSlice.actions;

export default employeeSlice.reducer;
