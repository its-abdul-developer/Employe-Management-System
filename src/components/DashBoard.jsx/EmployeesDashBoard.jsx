import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeesDashBoard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen text-white '>
        <Header/>
        <TaskListNumbers/>
        <TaskList/>  
    </div>
  )
}

export default EmployeesDashBoard