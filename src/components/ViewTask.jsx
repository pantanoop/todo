import TaskCard from "./TaskCard";

function ViewTask({ tasks }) {
      const handleDelete = () => {
      onDeleteTask();
  };
  return (
    <div className="taskList">
      <h3>Your Tasks</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <div classname="taskCard"><ul>
          {tasks.map((task) => (
            <div style={{ display: 'inline-Block'}}>   
            <input type="checkbox"/>
            <TaskCard task={task}/>
            <button onClick = {handleDelete}>delete</button>           
            </div>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
}

export default ViewTask;