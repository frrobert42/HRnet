import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import {useDispatch, useSelector} from "react-redux";
import {setNbEmployeesPerPage} from "../../store/employee-reducer";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/16/solid";

/**
 * Select employee per page component
 * @return {JSX.Element}
 * @constructor
 */
export default function SelectEmployeePerPage() {
    const {nbEmployeesPerPage} = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    // Number of employees per page to display
    const arrayNbEmployeesPerPage = [5, 10, 20, 25, 50, 100];

    const handleSetNbEmployeesPerPage = (value) => dispatch(setNbEmployeesPerPage(value));

    return (
        <Listbox value={nbEmployeesPerPage} onChange={handleSetNbEmployeesPerPage}>
            <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label>
            <div className="relative mt-2">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <span className="block truncate">{nbEmployeesPerPage}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
          </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {arrayNbEmployeesPerPage.map((option) => (
                        <ListboxOption
                            key={option}
                            value={option}
                            className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                        >
                            <span className="block truncate font-normal group-data-[selected]:font-semibold">{option}</span>

                            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    )
}
