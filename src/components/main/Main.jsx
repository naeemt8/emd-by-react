import employees from "../../data/employees.js";
import DepartmentBox from "./DepartmentBox.jsx";

export default function Main(){

    const frontEndArr = employees.filter((item) => {
        return item.departmentId === 1;
    })
    const backEndArr = employees.filter((item) => {
        return item.departmentId === 2;
    })
    const uiuxArr = employees.filter((item) => {
        return item.departmentId === 3;
    })
    const devOpsArr = employees.filter((item) => {
        return item.departmentId === 4;
    })
    const hrArr = employees.filter((item) => {
        return item.departmentId === 5;
    })
    const salesArr = employees.filter((item) => {
        return item.departmentId === 6;
    })

    let activeEmployees = 0;
    let inActiveEmployees = 0;
    let onLeaveEmployees = 0;

    employees.forEach((item) => {
        if( item.status == 'Active' ){
            activeEmployees += 1;
        }else if( item.status == 'Inactive' ){
            inActiveEmployees += 1;
        }else{
            onLeaveEmployees += 1;
        }
    })

    
    
    return(
        <>
            <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8">
                {/* Stats */}
                <section className="grid gap-6 lg:grid-cols-4">
                    {/* Stats */}
                    <div className="lg:col-span-3 grid gap-6 md:grid-cols-2">
                        {/* Total Employees */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Total Employees</p>
                            <h2 className="mt-2 text-3xl font-bold">{employees.length}</h2>
                        </div>

                        {/* Active */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Active Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-green-600">{activeEmployees}</h2>
                        </div>

                        {/* On leave */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">On Leave Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-yellow-600">{onLeaveEmployees}</h2>
                        </div>
                        
                        {/* Inactive */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Inactive Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-red-600">{inActiveEmployees}</h2>
                        </div>
                    </div>

                    {/* Activity */}
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="mb-4 text-lg font-semibold">Recent Activity</h2>

                        <ul className="space-y-3 text-sm text-gray-600">
                            <li>✅ John added</li>
                            <li>✏️ Sarah updated</li>
                            <li>🗑️ Mike deleted</li>
                            <li>➕ Alex added</li>
                            <li>✏️ Emma updated</li>
                        </ul>
                    </div>
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <DepartmentBox list={frontEndArr} title={'Front-end'}/>
                    <DepartmentBox list={backEndArr} title={'Back-end'}/>
                    <DepartmentBox list={uiuxArr} title={'UI/UX'}/>
                    <DepartmentBox list={devOpsArr} title={'DevOps'}/>
                    <DepartmentBox list={hrArr} title={'HR'}/>
                    <DepartmentBox list={salesArr} title={'Sales'}/>
                </section>
            </main>
        </>
    )
}