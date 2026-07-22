import { useRef } from "react"


export default function AddModule({ setIsAddModalOpen, addHandler }){


    const idInputRef = useRef(null);
    const nameInputRef = useRef(null);
    const departmentInputRef = useRef(null);
    const positionInputRef = useRef(null);
    const statusInputRef = useRef(null);

    function AddEmployee(e){

        e.preventDefault();

        const name = nameInputRef.current.value;
        const department = departmentInputRef.current.value;
        const position = positionInputRef.current.value;
        const status = statusInputRef.current.value;

        addHandler(name, department, position, status);
    }



    return(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-xl max-lg:w-[90%]">

                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-800 max-[450px]:text-lg">
                        Add Employee
                    </h2>

                    <button
                        onClick={() => setIsAddModalOpen(false)}
                        className="text-2xl text-gray-500 hover:text-red-500"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={AddEmployee} className="grid gap-4">

                    <input
                        ref={nameInputRef}
                        type="text"
                        placeholder="Full Name"
                        required
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 max-[450px]:px-2 py-1 text-sm"
                    />

                    <select
                        ref={departmentInputRef}
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 max-[450px]:px-2 py-1 text-sm">

                        <option value="front-end">Frontend</option>
                        <option value="back-end">Backend</option>
                        <option value="ui-ux">UI / UX</option>
                        <option value="devops">DevOps</option>
                        <option value="hr">HR</option>
                        <option value="sales">Sales</option>
                    </select>

                    <input
                        ref={positionInputRef}
                        type="text"
                        placeholder="Position"
                        required
                        className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-indigo-500 max-[450px]:px-2 py-1 text-sm"
                    />

                    <select
                        ref={statusInputRef}
                        className="rounded-lg border border-gray-300 px-4 py-2 max-[450px]:px-2 py-1 text-sm"
                    >
                        <option value="Active">Active</option>
                        <option value="On Leave">On Leave</option>
                        <option value="Inactive">Inactive</option>
                    </select>

                    <div className="mt-8 flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={() => setIsAddModalOpen(false)}
                            className="rounded-lg border px-5 py-2 hover:bg-gray-100 max-[450px]:px-3 py-1 text-sm"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 max-[450px]:px-3 py-1 text-sm"
                            >
                            Add
                        </button>

                    </div>
                </form>


            </div>
        </div>
    )
}