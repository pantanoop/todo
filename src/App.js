import { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import ViewTask from "./components/ViewTask";
import "./App.css";

function App() {
  // const [tasks, setTasks] = useState([]);
  // const [deletedTasks, setDeletedTasks] = useState([]);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [deletedTasks, setDeletedTasks] = useState(() => {
    const savedDeleted = localStorage.getItem("deletedTasks");
    return savedDeleted ? JSON.parse(savedDeleted) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("deletedTasks", JSON.stringify(deletedTasks));
  }, [tasks, deletedTasks]);

  const onAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  // const onDeleteTask = (taskId) => {
  //   const updatedTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(updatedTasks);
  // };

  const onDeleteTask = (taskId) => {
    
    const taskToDelete = tasks.find((t) => t.id === taskId);
    if (!taskToDelete.completed) {
    alert("Complete the task before deleting it!");
    return;
  }
    setDeletedTasks([...deletedTasks, taskToDelete]);
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const onRestoreTask = (taskId) => {
    const taskToRestore = deletedTasks.find((t) => t.id === taskId);
    setTasks([...tasks, taskToRestore]);
    setDeletedTasks(deletedTasks.filter((t) => t.id !== taskId));
  };

  const onTaskComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <AddTodo onAddTask={onAddTask} />
      <ViewTask
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onTaskComplete={onTaskComplete}
        deletedTasks={deletedTasks}
        onRestoreTask={onRestoreTask}
      />
    </div>
  );
}

export default App;
