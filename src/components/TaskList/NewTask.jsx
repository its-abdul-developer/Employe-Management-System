import React from 'react'

const  NewTask = () => {
  return (
    <div>  <div className="h-full  shrink-0 w-[30vw] p-5 rounded-md bg-blue-300">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, et
          ullam! Reprehenderit iure veniam excepturi tempora totam nulla
          accusamus quas.
        </p>
        <div className="mt-5">
            <button className="bg-green-500 text-white px-2 py-2 rounded mr-2">Accept Task</button>
        
        </div>
      </div></div>
  )
}

export default NewTask