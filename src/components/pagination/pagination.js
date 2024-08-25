import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {useDispatch, useSelector} from "react-redux";
import {setTableIndex, tableIndexDecrement, tableIndexIncrement} from "../../store/employee-reducer";

/**
 * Pagination component
 * @return {JSX.Element}
 * @constructor
 */
export default function Pagination() {
    const {tableIndex, nbEmployeesPerPage, filteredEmployees} = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    const nbPages = Math.ceil(filteredEmployees.length / nbEmployeesPerPage);

    const handleSetIndex = (index) => dispatch(setTableIndex(index));
    const handleIncrement = () => {
        if (tableIndex < nbPages) dispatch(tableIndexIncrement());
    }
    const handleDecrement = () => dispatch(tableIndexDecrement());

    const index = ({ col }) => {
        const cols = [];

        for (let i = 0; i < col; i++) {
            if (i + 1 === tableIndex) {
                cols.push(
                    <button
                        key={'activeCol-' + i}
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        {i + 1}
                    </button>
                );
            } else {
                if (i + 1 === 1 || i + 1 === nbPages || (i + 1 >= tableIndex - 2 && i + 1 <= tableIndex + 2)) {
                    cols.push(
                        <button
                            key={'col-' + i}
                            onClick={() => handleSetIndex(i + 1)}
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            {i + 1}
                        </button>
                    );
                } else if (i + 1 === tableIndex - 3 || i + 1 === tableIndex + 3) {
                    cols.push(
                        <button
                            key={'colDot-' + i}
                            onClick={() => handleSetIndex(i + 1)}
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
                        >
                            ...
                        </button>
                    );
                }
            }
        }

        return <>
            {cols.map((col, i) => (
                <div key={'col' + i}>
                    {col}
                </div>
            ))}
        </>;
    };

    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing
                        <span className="font-medium"> { (tableIndex -1) * nbEmployeesPerPage + 1 } </span>
                        to <span className="font-medium">
                        { tableIndex !== nbPages ? (tableIndex -1) * nbEmployeesPerPage + nbEmployeesPerPage : filteredEmployees.length }
                    </span> of{' '}
                        <span className="font-medium">{filteredEmployees.length}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <button
                            onClick={() => handleDecrement()}
                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5"/>
                        </button>
                        {index({col: nbPages})}
                        <button
                            onClick={() => handleIncrement()}
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    )
}
