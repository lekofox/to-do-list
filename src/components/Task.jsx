import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
const Task = ({ task, handleTaskClick, handleTaskRemoval }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid white" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="button-container">
        <button
          className="remove-task-button"
          onClick={() => handleTaskRemoval(task.id)}
        >
          <CgClose />
        </button>
        <button className="show-task-details-button">
          <CgInfo />
        </button>
      </div>
    </div>
  );
};
// return <div className="task-container">{task.title}</div>;

export default Task;
