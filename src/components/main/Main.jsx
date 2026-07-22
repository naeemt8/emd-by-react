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
                <section >
                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                        {/* Total Employees */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500 max-[450px]:text-xs">Total Employees</p>
                            <h2 className="mt-2 text-3xl font-bold max-[450px]:text-2xl">{employeesArr.length}</h2>
                        </div>

                        {/* Active */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500 max-[450px]:text-xs">Active Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-green-600 max-[450px]:text-2xl">{activeEmployees}</h2>
                        </div>

                        {/* On leave */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500 max-[450px]:text-xs">On Leave Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-yellow-600 max-[450px]:text-2xl">{onLeaveEmployees}</h2>
                        </div>
                        
                        {/* Inactive */}
                        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                            <p className="text-sm text-gray-500 max-[450px]:text-xs">Inactive Employees</p>
                            <h2 className="mt-2 text-3xl font-bold text-red-600 max-[450px]:text-2xl">{inActiveEmployees}</h2>
                        </div>
                    </div>
                </section>

                <section className="mx-auto grid w-full gap-6 lg:grid-cols-2 lg:max-w-none max-lg:max-w-[80%] max-md:max-w-[100%]">
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