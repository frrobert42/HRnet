import {useDispatch, useSelector} from "react-redux";
import {setFilteredEmployees} from "../../store/employee-reducer";

/**
 * Filter component
 * @return {JSX.Element}
 * @constructor
 */
export default function Filter() {
    const {employees} = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    const handleFilter = (value) => {
        // filter employees by all fields
        let filteredEmployees = employees.filter((employee) => {
            return Object.keys(employee).some((key) => {
                return employee[key].toLowerCase().includes(value.toLowerCase());
            });
        });
        dispatch(setFilteredEmployees(filteredEmployees));
    }

    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Search :
            </label>
            <div className="mt-2">
                <input
                    id="search"
                    onChange={(v) => handleFilter(v.target.value)}
                    name="search"
                    type="search"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}
