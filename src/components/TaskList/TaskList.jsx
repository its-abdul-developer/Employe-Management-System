import React from "react";

const TaskList = () => {
  return (
    <div className="taskScroll h-[50%] px-10 py-5  flex overflow-x-auto w-full items-center justify-start gap-4">
      <div className="h-full flex-shrink-0 w-[30vw] p-5 rounded-md bg-red-300">
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
      </div>
      <div className="h-full flex-shrink-0 w-[30vw] p-5 rounded-md bg-blue-300">
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
      </div>
      <div className="h-full flex-shrink-0 w-[30vw] p-5 rounded-md bg-green-400">
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
      </div>
    </div>
  );
};

export default TaskList;
