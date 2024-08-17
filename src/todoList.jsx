import React from "react";
import Card from "./card";
import "./App.css"

const ToDoList = ({ tasks }) => {
  return (
    <div className="taskListPlace">
      {tasks.map((task, index) => (
        <Card
          key={index}
          title={task.title}
          text={task.description}
          width="20rem" // Optionally adjust width
          margin="30px"
        />
      ))}
    </div>
  );
};

export default ToDoList;
