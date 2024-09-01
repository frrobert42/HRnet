import {ChevronDownIcon} from "@heroicons/react/16/solid";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

/**
 * Table component
 * @return {JSX.Element}
 * @constructor
 */
export default function Table() {
    const {filteredEmployees, tableIndex, nbEmployeesPerPage} = useSelector((state) => state.employees);
    const [displayEmployees, setDisplayEmployees] = useState(filteredEmployees);

    // use useEffect to update displayEmployees when filteredEmployees changes
    useEffect(() => {
        setDisplayEmployees(filteredEmployees);
    }, [filteredEmployees]);


    const sortBy = (key) => {
        // sort the data by key
        const sortedData = [...displayEmployees].sort((a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] < b[key]) return -1;
            return 0;
        });
        // Check if the sorted data is equal to the current displayEmployees array
        const isSameOrder = sortedData.every((item, index) => item === displayEmployees[index]);

        // If the sorted data is the same as the current, reverse it
        if (isSameOrder) sortedData.reverse();

        // set the sorted data to displayEmployees
        setDisplayEmployees(sortedData);
    };


    return (
        <table className="min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
                <th scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    <button onClick={() => sortBy('firstName')} className="group inline-flex">
                        First Name<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                        </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('lastName')} className="group inline-flex">
                        Last Name<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('startDate')} className="group inline-flex">
                        Start Date<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('department')} className="group inline-flex">
                        Department<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('dateOfBirth')} className="group inline-flex">
                        Date of Birth<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('street')} className="group inline-flex">
                        Street<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('city')} className="group inline-flex">
                        City<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('state')} className="group inline-flex">
                        State<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
                <th scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    <button onClick={() => sortBy('zipcode')} className="group inline-flex">
                        Zip Code<span
                        className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
                                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5"/>
                                            </span>
                    </button>
                </th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
            {displayEmployees
                .slice((tableIndex - 1) * nbEmployeesPerPage, tableIndex * nbEmployeesPerPage)
                .map((employee, i) => (
                    <tr key={`${employee.firstName}${i++}`}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {employee.firstName?.charAt(0).toUpperCase() + employee.firstName?.slice(1)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.lastName?.charAt(0).toUpperCase() + employee.lastName?.slice(1)}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.startDate}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.department}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.dateOfBirth}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.street}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.city?.toUpperCase()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.state}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {employee.zipCode}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
