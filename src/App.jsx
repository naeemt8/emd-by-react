import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './components/header/Header'
import Main from './components/main/Main'
import EditModule from './components/EditModule'
import { EditModalContext } from './contexts/EditModalContext'
import { DeleteHandlerContext } from './contexts/DeleteHandlerContext'
import employees from "../src/data/employees.js"
import AddModule from './components/AddModule.jsx'
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [ employeesArr, setEmployeesArr ] = useState(() => {
    const stored = localStorage.getItem("employees");

    if (stored) {
      return JSON.parse(stored);
    }

    localStorage.setItem("employees", JSON.stringify(employees));
    return employees;
  });

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employeesArr));
  }, [employeesArr]);

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  function deleteHandler(id){
      setEmployeesArr(employeesArr.filter((item) => item.id !== id ));
  }

  function openEditModal(item){
    setIsEditModalOpen(true)
    setSelectedEmployee(item)
  }

  function editHandler(updatedEmployee){

    setEmployeesArr(prev =>
      prev.map(employee =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );
    setIsEditModalOpen(false)
  }

  function openAddModal(){
    setIsAddModalOpen(true);
  }

  function addHandler(name, department, position, status){
    let newEmployee = {
      id: uuidv4(),
      name,
      department,
      position,
      status
    }

    setEmployeesArr([...employeesArr, newEmployee]);

    setIsAddModalOpen(false)
  }

  const searchedEmployees = employeesArr.filter((employee) => {
    const value = searchValue.toLowerCase();

    return employee.name.toLowerCase().includes(value)
  });

  return (
    <>
      <div>
        <Header openAddModal={openAddModal} searchValue={searchValue} setSearchValue={setSearchValue} searchedEmployees={searchedEmployees} openEditModal={openEditModal}/>
        <EditModalContext.Provider value={openEditModal} >
          <DeleteHandlerContext.Provider value={deleteHandler}>
            <Main employeesArr={employeesArr} setEmployeesArr={setEmployeesArr}/>
          </DeleteHandlerContext.Provider>
        </EditModalContext.Provider>
        { isEditModalOpen && ( <EditModule selectedEmployee={selectedEmployee} setIsEditModalOpen={setIsEditModalOpen} editHandler={editHandler}/> ) }
        { isAddModalOpen && ( <AddModule setIsAddModalOpen={setIsAddModalOpen} addHandler={addHandler}/> ) }
      </div>
    </>
  )
}

export default App
