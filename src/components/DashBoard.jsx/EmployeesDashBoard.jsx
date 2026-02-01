import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeesDashBoard = ({data}) => {
 
 
  return (
    <div className='bg-[#1c1c1c] h-screen text-white overflow-hidden'>
        <Header data = {data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>  
    </div>
  )
}

export default EmployeesDashBoard