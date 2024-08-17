import React, { useState } from "react";

const InputField = ({ onAddTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(task);
    setTask({
      title: "",
      description: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          name="title"
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={task.title}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="description"
          onChange={handleChange}
          className="form-control"
          rows="3"
          placeholder="Description"
          value={task.description}
        />
      </div>
      <button type="submit" className="btn btn-warning">
        Add Task
      </button>
    </form>
  );
};

export default InputField;
