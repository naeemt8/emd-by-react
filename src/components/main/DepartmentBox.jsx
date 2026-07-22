import { Pencil, Trash2 } from "lucide-react";
import { useContext } from "react";
import { EditModalContext } from "../../contexts/EditModalContext";
import { DeleteHandlerContext } from "../../contexts/DeleteHandlerContext";

export default function DepartmentBox({ list, title }){

    const openModal = useContext(EditModalContext);

    const deleteHandler = useContext(DeleteHandlerContext);


    return(
        <>
            <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="flex items-start justify-between border-b p-5 max-[350px]:p-3">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-gray-800 max-[450px]:text-lg ">{title}</h2>

                        <p className="mt-1 text-sm text-gray-500 max-[450px]:text-xs ">{list.length} Employees</p>
                    </div>

                    <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-600 max-[450px]:text-[10px]">Department</span>
                </div>

                <div className="h-[520px] overflow-y-auto">
                    {
                        list.map( (item) => {

                            const statusClasses = {
                                Active: "bg-green-100 text-green-700",
                                'On Leave' : "bg-yellow-100 text-yellow-700",
                                Inactive: "bg-red-100 text-red-700",
                            };
                            return (
                                <div key={item.id} className="flex items-center justify-between border-b px-5 py-3 hover:bg-gray-50 max-[450px]:px-2">
                                    <div className="flex items-center gap-3 max-[450px]:gap-1.5">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                                            <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.8"
                                            stroke="currentColor"
                                            className="h-6 w-6 text-gray-500"
                                            >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.964 0a9 9 0 10-11.964 0m11.964 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            </svg>
                                        </div>

                                        <div>
                                            <h3 className="font-medium max-[450px]:text-sm">{item.name}</h3>
                                            <p className="text-sm text-gray-500 max-[450px]:text-xs">{item.position}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 max-[450px]:gap-1.5">
                                        <span className={`rounded-full px-3 py-1 max-[450px]:text-xs max-[350px]:px-2 py-2 ${statusClasses[item.status]}`}>
                                            <span className="max-[350px]:hidden">
                                                {item.status}
                                            </span>
                                        </span>

                                        <button onClick={() => openModal(item)} className="text-blue-600 hover:text-blue-800">
                                            <Pencil className="h-[18px] w-[18px] max-[450px]:h-[14px] max-[450px]:w-[14px]" />
                                        </button>

                                        <button onClick={() => deleteHandler(item.id)} className="text-red-600 hover:text-red-800">
                                            <Trash2 className="h-[18px] w-[18px] max-[450px]:h-[14px] max-[450px]:w-[14px]" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}