import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {

  
  return (
    <div className="taskScroll h-[50%] px-10 py-5  flex overflow-x-auto w-full items-center justify-start gap-4">
      {data.tasks.map((task, i)=>{
       if(task.newTask){
        return <NewTask key={i} />
       }
       if(task.completed){
        return <CompleteTask key={i} />
       }
       if(task.failed){
        return <FailedTask key={i} />
       }
        if(task.active){
        return <AcceptTask key={i} />
        }
      })}
    </div>
  );
};

export default TaskList;
