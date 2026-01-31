import React from "react";

const AllTask = () => {
  return (
    <>
      <div className="px-10">
        <div className="taskScroll bg-[#1c1c1c] h-39  rounded-md  mt-3 text-white p-4 overflow-auto">
            <div className="flex items-center justify-between mb-2 bg-blue-400 rounded-md px-4 py-2">
                <h2 className=" font-medium">Abdul</h2>
                <h3 className=" font-medium">Make a UI design</h3>
                <h5 className=" font-medium">Status</h5>
            </div>
            <div className="flex items-center justify-between mb-2 bg-green-400 rounded-md px-4 py-2">
                <h2 className=" font-medium">Abdul</h2>
                <h3 className=" font-medium">Make a UI design</h3>
                <h5 className=" font-medium">Status</h5>
            </div>
            <div className="flex items-center justify-between mb-2 bg-yellow-400 rounded-md px-4 py-2">
                <h2 className=" font-medium">Abdul</h2>
                <h3 className=" font-medium">Make a UI design</h3>
                <h5 className=" font-medium">Status</h5>
            </div>
           
        </div>
      </div>
    </>
  );
};

export default AllTask;
