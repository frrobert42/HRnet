import "./employee-list.css"
import Header from "../../components/header/header";

export default function EmployeeList() {
    const employees = localStorage.getItem('employees') ? JSON.parse(localStorage.getItem('employees')) : [];
    return (
        <>
            <Header />
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead>
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                                        First Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Last Name
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Start Date
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Department
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Date of Birth
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Street
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        City
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        State
                                    </th>
                                    <th scope="col"
                                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Zip Code
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                {employees.map((employee, i = 0) => (
                                    <tr key={employee.firstName + i++}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {employee.firstName}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.lastName}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.startDate.toString()}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.department}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.dateOfBirth.toString()}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.street}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.city}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.state}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{employee.zipCode}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
