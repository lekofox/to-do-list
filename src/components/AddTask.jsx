import React, { useState } from "react";
import "./AddTask.css";
import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");
  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
  };
  return (
    <div className="add-task-container">
      <input
        type="text"
        className="add-task-input"
        value={inputData}
        onChange={handleInputChange}
      />

      <div className="add-task-button-container">
        <Button onClick={handleAddTaskClick}>Add</Button>
      </div>
    </div>
  );
};

export default AddTask;
