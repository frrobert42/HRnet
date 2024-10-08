import "./create-employee.css"
import {Label, Listbox, ListboxButton, ListboxOption, ListboxOptions} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/16/solid";
import {useState} from "react";
import {states} from "../../data/states";
import {departments} from "../../data/departments";
import Datepicker from "react-tailwindcss-datepicker";
import Modal from "modal-react-p14";
import Header from "../../components/header/header";
import {addEmployee} from "../../store/employee-reducer";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

/**
 * CreateEmployee component
 * @return {JSX.Element}
 * @constructor
 */
export default function CreateEmployee() {
    const [state, setState] = useState('Select State');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState();
    const [startDate, setStartDate] = useState();
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddEmployee = (employee) => dispatch(addEmployee(employee));

    const saveEmployee = () => {
        // check if all fields are filled
        const form = document.getElementById('create-employee');
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        let employee = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            dateOfBirth: dateOfBirth?.startDate || '',
            startDate: startDate?.startDate || '',
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: state === 'Select State' ? '' : state,
            zipCode: document.getElementById('zip-code').value,
            department: selectedDepartment?.name || ''
        }

        // save employee
        handleAddEmployee(employee)

        // clear form
        form.reset();
        setDateOfBirth(null);
        setStartDate(null);
        setState('Select State');
        employee = null;

        // show modal
        setModalOpen(true);
    }

    return (
        <>
            <div className="mb-72">
                <Header />

                <div className="create-employee-container">
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
                                    <label htmlFor="dateOfBirth"
                                           className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                        Date of Birth
                                    </label>
                                    <Datepicker
                                        placeholder={"Date of Birth"}
                                        asSingle={true}
                                        useRange={false}
                                        required={true}
                                        value={dateOfBirth}
                                        onChange={newDate => setDateOfBirth(newDate)}
                                    />
                                </div>

                                <div className="w-1/2 m-auto">
                                    <label htmlFor="startDate"
                                           className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                                        Start Date
                                    </label>
                                    <Datepicker
                                        placeholder={"Start Date"}
                                        asSingle={true}
                                        useRange={false}
                                        required={true}
                                        value={startDate}
                                        onChange={newDate => setStartDate(newDate)}
                                    />
                                </div>
                            </div>

                            <div>
                                <span className="font-bold">Address :</span>
                            </div>

                            <div className="flex flex-row gap-x-10 w-full">


                                <div className="w-1/2 m-auto">
                                    <label htmlFor="street" className="block text-sm font-medium leading-6 text-gray-900">
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
                            <button onClick={saveEmployee}
                                    type="button"
                                    aria-label="save"
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
                    onClickButton={() => {navigate('/employee-list')}}
                    buttonMessage={"View Employee"}
                    positionX={"right"}
                    positionY={"top"}
                    modalMessage={"Employee saved successfully"}
                />
            }
        </>
    );
}
