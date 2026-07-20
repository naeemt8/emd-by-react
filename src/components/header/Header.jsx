import SearchBar from "./SearchBar";


export default function Header(){
    return(
        <>
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-bold text-indigo-600">
                    Employee<span className="text-gray-900">Hub</span>
                    </h1>
                </div>

                {/* Search */}
                
                <SearchBar />

                {/* Right */}
                <div className="flex items-center gap-4">
                    <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                    + Add Employee
                    </button>

                    <div className="flex items-center gap-3">
                    <img
                        src="../images/images.jfif"
                        alt="Admin"
                        className="h-10 w-10 rounded-full object-cover"
                    />

                    <div className="hidden text-right sm:block">
                        <p className="text-sm font-semibold text-gray-800">
                        Admin
                        </p>
                        <p className="text-xs text-gray-500">
                        HR Manager
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}