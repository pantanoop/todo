import { useState } from 'react';
import AddTodo from './components/AddTodo';
import ViewTask from './components/ViewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const onAddTask = (taskText) => {
    const newTask = {
      id: Date.now(),
      text: taskText
    };
    setTasks([...tasks, newTask]);
  };

  const onDelTask = (taskId) =>{
     const updatedTasks = tasks.filter(task => task.id !== taskId);
     setTasks(updatedTasks);
  };
  
  return (
    <div className="app">
      <AddTodo onAddTask={onAddTask} />
      <ViewTask tasks={tasks} />
    </div>
  );
}

export default App;