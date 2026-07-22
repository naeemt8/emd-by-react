import { useState } from "react";
import DepartmentBox from "./DepartmentBox.jsx";

export default function Main({ employeesArr, setEmployeesArr }){

    const frontEndArr = employeesArr.filter((item) => {
        return item.department === 'front-end';
    })
    const backEndArr = employeesArr.filter((item) => {
        return item.department === 'back-end';
    })
    const uiuxArr = employeesArr.filter((item) => {
        return item.department === 'ui-ux';
    })
    const devOpsArr = employeesArr.filter((item) => {
        return item.department === 'devops';
    })
    const hrArr = employeesArr.filter((item) => {
        return item.department === 'hr';
    })
    const salesArr = employeesArr.filter((item) => {
        return item.department === 'sales';
    })

    let activeEmployees = 0;
    let inActiveEmployees = 0;
    let onLeaveEmployees = 0;

    employeesArr.forEach((item) => {
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
                    <div className="lg:col-span-4 grid gap-6 md:grid-cols-4">
                        {/* Total Employees */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500">Total Employees</p>
                            <h2 className="mt-2 text-3xl font-bold">{employeesArr.length}</h2>
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
                </section>

                <section className="grid gap-6 md:grid-cols-2">
                    <DepartmentBox list={frontEndArr} title={'Front-end'}/>
                    <DepartmentBox list={backEndArr} title={'Back-end'} />
                    <DepartmentBox list={uiuxArr} title={'UI/UX'} />
                    <DepartmentBox list={devOpsArr} title={'DevOps'} />
                    <DepartmentBox list={hrArr} title={'HR'} />
                    <DepartmentBox list={salesArr} title={'Sales'} />
                </section>
            </main>
        </>
    )
}