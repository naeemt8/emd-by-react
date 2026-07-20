

export default function SearchBar(){
    return(
        <>
            <div className="hidden w-full max-w-md md:block">
                <input
                type="text"
                placeholder="Search employees..."
                className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                />
            </div>
        </>
    )
}