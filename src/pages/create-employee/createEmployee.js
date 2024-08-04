import "./create-employee.css"
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {states} from "../../data/states";
import {departments} from "../../data/departments";
import Datepicker from "react-tailwindcss-datepicker";
import Modal from "modal-react-p14";
import Header from "../../components/header/header";

export default function CreateEmployee() {
    const [state, setState] = useState('Select State');
    const [selectedDepartment, setSelectedDepartment] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [modalOpen, setModalOpen] = useState(false);

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    }

    const handleStartDateChange = (date) => {
        setStartDate(date);
    }

    const saveEmployee = () => {
        // check if all fields are filled
        const form = document.getElementById('create-employee');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // check if state is selected
        if (state === 'Select State') {
            alert('Please select a state');
            // set form to invalid
            return;
        }

        // check if department is selected
        if (!selectedDepartment || selectedDepartment.name === 'Select Department') {
            alert('Please select a department');
            return;
        }

        const employee = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            dateOfBirth: dateOfBirth,
            startDate: startDate,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: state,
            zipCode: document.getElementById('zip-code').value,
            department: selectedDepartment.name
        }
        console.log(employee);
        // add employee to the list of employees in local storage
        let employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        // show confirmation modal
        setModalOpen(true);
    }

    return (
        <>
            <div className="mb-72">
                {/*<div className="text-center my-3">*/}
                {/*    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">HRnet</h1>*/}
                {/*</div>*/}
                <Header />

                <div className="create-employee-container">
                    {/*<a href="/employee-list" className="underline cursor-pointer">View Current Employees</a>*/}
                    {/*<div className="mt-2 mb-0">*/}
                    {/*    <h2 className="text-xl font-bold">Create Employee</h2>*/}
                    {/*</div>*/}

                    <div className="sm:mx-auto">
                        <form action="#" id="create-employee" className="text-left space-y-3">
                            <div className="flex flex-row gap-x-10 w-full">
                                <div className="m-auto w-1/2">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2 w-full">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            required
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="m-auto w-1/2">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            required
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-x-10">
                                <div className="w-1/2">
                                    <Datepicker
                                        placeholder={"Date of Birth"}
                                        primaryColor="blue"
                                        asSingle={true}
                                        useRange={false}
                                        value={dateOfBirth}
                                        onChange={handleDateOfBirthChange}
                                    />
                                </div>

                                <div className="w-1/2 m-auto">
                                    <Datepicker
                                        placeholder={"Start Date"}
                                        primaryColor="blue"
                                        asSingle={true}
                                        useRange={false}
                                        value={startDate}
                                        onChange={handleStartDateChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <span className="font-bold">Address :</span>
                            </div>

                            <div className="flex flex-row gap-x-10 w-full">


                                <div className="w-1/2 m-auto">
                                    <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                        Street
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street"
                                            name="street"
                                            type="text"
                                            autoComplete="street-address"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="w-1/2 m-auto">
                                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            autoComplete="address-level2"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row gap-x-10">
                                <div className="w-1/2">
                                    <Listbox value={state} onChange={setState}>
                                        <Label htmlFor="state"
                                               className="block text-sm font-medium leading-6 text-gray-900">State</Label>
                                        <div className="relative mt-2">
                                            <ListboxButton
                                                className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <span className="block truncate">{state}</span>
                                                <span
                                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400"/>
                                    </span>
                                            </ListboxButton>

                                            <ListboxOptions
                                                transition
                                                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                            >
                                                {states.map((state) =>
                                                        <ListboxOption
                                                            key={state?.abbreviation}
                                                            value={state?.name}
                                                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white">
                                                <span
                                                    className="block truncate font-normal group-data-[selected]:font-semibold">
                                                    {state?.name}
                                                </span>
                                                            <span
                                                                className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                    <CheckIcon aria-hidden="true" className="h-5 w-5"/>
                                                </span>
                                                        </ListboxOption>
                                                )
                                                }
                                            </ListboxOptions>
                                        </div>
                                    </Listbox>
                                </div>

                                <div className="w-1/2">
                                    <label htmlFor="zip-code" className="block text-sm font-medium leading-6 text-gray-900">
                                        Zip Code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="zip-code"
                                            name="zip-code"
                                            type="text"
                                            autoComplete="postal-code"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <Listbox value={selectedDepartment} onChange={setSelectedDepartment}>
                                    <Label className="block text-sm font-medium leading-6 text-gray-900">Department</Label>
                                    <div className="relative mt-2">
                                        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                            <span className="block truncate">{selectedDepartment?.name || 'Select a department'}</span>
                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                            </span>
                                        </ListboxButton>

                                        <ListboxOptions
                                            transition
                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                        >
                                            {departments.map((department) => (
                                                <ListboxOption
                                                    key={department.id}
                                                    value={department}
                                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                                                >
                                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">{department.name}</span>

                                                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                                                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                                    </span>
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                            <button onClick={saveEmployee} type="button"
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Save
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            {
                modalOpen &&
                <Modal
                    onClose={() => {setModalOpen(false)}}
                    modalMessage={"Employee saved successfully"}
                />
            }
        </>
    );
}
