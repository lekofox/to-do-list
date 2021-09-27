import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskRemoval }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskRemoval={handleTaskRemoval}
        />
      ))}
    </>
  );
};

export default Tasks;
