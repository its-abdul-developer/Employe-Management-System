import React from 'react'

const CreateTask = () => {
  return (
     <div className="px-10 ">
         <div className="p-6 w-full bg-[#1c1c1c] text-white rounded-md ">
        <form className="w-full flex items-center justify-between ">
          <div className="w-[40%]">
            <h3 className="text-sm">Task Title</h3>
            <input className="border w-full rounded-xs my-1 text-sm px-2 py-1  outline-none focus:border-emerald-400" type="text" placeholder="Make a UI Design" />
            <h3 className="text-sm mt-3">Date</h3>
            <input className="border w-full rounded-xs my-1 text-sm px-2 py-1  outline-none focus:border-emerald-400" type="date" />
            <h3 className="text-sm mt-3">Asign to</h3>
            <input className="border w-full rounded-xs my-1 text-sm px-2 py-1  outline-none focus:border-emerald-400" type="text" placeholder="employee name" />
            <h3 className="text-sm mt-3">Category</h3>
            <input className="border w-full rounded-xs my-1 text-sm px-2 py-1  outline-none focus:border-emerald-400" type="text" placeholder="design, dev, etc.." />
          </div>
          <div className="w-[40%] ">
            <h3 className="text-sm">Description</h3>
            <textarea rows="8"  placeholder="Enter text here..." className="border w-full outline-none rounded-xs my-1 text-sm px-2 py-1 focus:border-emerald-400"></textarea>
            <button className="bg-emerald-400 outline-none w-full text-white px-4 py-2 rounded-md ">Create Task</button>
          </div>
        </form>
      </div>
     </div>
  )
}

export default CreateTask