import { useState } from "react";

function AddTodo({ onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    onAddTask(taskText);
    setTaskText("");
  };

  return (
    <div className="todo">
      <div className="header">
        <h1>To-Do</h1>
        <p>Organise Your tasks efficiently and stay productive</p>
        <div className="inputTask">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter a task..."
          />
          <button onClick={handleAdd}>Add Task</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
