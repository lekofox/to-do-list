import React from "react";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";
const Task = ({ task, handleTaskClick, handleTaskRemoval }) => {
  const history = useHistory();
  const handleTaskDetailsClick = () => {
    history.push(`/${task.title}`);
  };
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
        <button
          className="show-task-details-button"
          onClick={handleTaskDetailsClick}
        >
          <CgInfo />
        </button>
      </div>
    </div>
  );
};
// return <div className="task-container">{task.title}</div>;

export default Task;
