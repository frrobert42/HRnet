import "./employee-list.css"
import Header from "../../components/header/header";
import Pagination from "../../components/pagination/pagination";
import SelectEmployeePerPage from "../../components/selectEmployeePerPage/selectEmployeePerPage";
import Filter from "../../components/filter/filter";
import Table from "../../components/table/table";

export default function EmployeeList() {

    return (
        <>
            <Header/>
            <div className="flex flex-row px-10 gap-x-10 justify-between">
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <SelectEmployeePerPage/>
                </div>
                <div className="sm:w-1/2 md:w-1/3 lg:w-1/4">
                    <Filter/>
                </div>
            </div>
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="mt-8 flow-root">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <Table/>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
}
