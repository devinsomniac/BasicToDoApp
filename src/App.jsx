import { useState } from 'react';
import './App.css';
import InputField from './todoform';
import ToDoList from './todoList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <>
      <div className="taskInput">
        <h1 style={{ color: "white" }}>To do List</h1>
        <InputField onAddTask={addTask} />
      </div>
      <div >
        <ToDoList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
