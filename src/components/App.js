import React, { useState, useEffect } from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    console.log("Tasks updated:", tasks);
  }, [tasks]);

  const addTodo = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleSubmit = () => {
    if (inputValue.length > 5) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    } else {
      alert("Task must be more than 5 characters");
    }
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={incrementCounter}>Increment</button>
      <p>Counter: {counter}</p>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleSubmit}>Submit</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>

      <UseMemoComponent tasks={tasks} />
      <ReactMemoComponent tasks={tasks} />
    </div>
  );
}

export default App;
