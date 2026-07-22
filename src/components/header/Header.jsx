import { IoClose } from "react-icons/io5";
import adminImg from "../../assets/images.jfif";

export default function Header({ openAddModal, searchValue, setSearchValue, searchedEmployees, openEditModal }){
    return(
        <>
            <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:h-16 md:flex-nowrap md:px-6">

                    {/* Logo */}
                    <div className="order-1">
                    <h1 className="text-2xl font-bold text-indigo-600">
                        Employee<span className="text-gray-900">Hub</span>
                    </h1>
                    </div>

                    {/* Profile */}
                    <div className="order-2 ml-auto flex items-center gap-3 md:order-4 md:ml-0">
                    <img
                        src={adminImg}
                        alt="Admin"
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div className="text-right block">
                        <p className="text-sm font-semibold text-gray-800">Admin</p>
                        <p className="text-xs text-gray-500">HR Manager</p>
                    </div>
                    </div>

                    {/* Search */}
                    <div className="order-3 relative w-full md:order-2 md:w-[250px] lg:w-full lg:max-w-md">
                        <input
                            type="text"
                            placeholder="Search employees..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />

                        {searchValue.trim() && (
                            <div className="absolute left-0 right-0 top-full z-50 mt-2 max-h-80 overflow-y-auto rounded-xl border border-gray-200 bg-white shadow-xl">

                                {searchedEmployees.length > 0 ? (
                                    searchedEmployees.map((employee) => (
                                        <div
                                            onClick={() => openEditModal(employee)}
                                            key={employee.id}
                                            className="flex cursor-pointer items-center justify-between border-b px-4 py-3 last:border-none hover:bg-gray-50"
                                        >
                                            <div>
                                                <h3 className="font-medium text-gray-800">
                                                    {employee.name}
                                                </h3>

                                                <p className="text-sm text-gray-500">
                                                    {employee.position}
                                                </p>
                                            </div>

                                            <span className="text-xs text-indigo-600">
                                                {employee.department}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-sm text-gray-500">
                                        No employee found
                                    </div>
                                )}

                            </div>
                        )}

                        {searchValue && (
                            <button
                                type="button"
                                onClick={() => setSearchValue("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                            >
                                <IoClose size={18} />
                            </button>
                        )}
                    </div>

                    {/* Add Button */}
                    <div className="order-4 flex w-full md:order-3 md:w-auto">
                    <button
                        onClick={openAddModal}
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 md:w-auto">
                        + Add Employee
                    </button>
                    </div>
                </div>
            </header>
        </>
    )
}