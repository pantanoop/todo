import TaskCard from "./TaskCard";
import DeletedTaskCard from "./DeletedTaskCard";
import { useState } from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function ViewTask({
  tasks,
  onDeleteTask,
  onTaskComplete,
  deletedTasks,
  onRestoreTask,
}) {

const [showDeleted, setShowDeleted] = useState(false);
const handleShowDeleted = () => {
  setShowDeleted(!showDeleted);
};

  return (
    <div className="taskList">
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul style={{ textDecoration: "none" }}>
          {tasks.map((task) => (
            <li key={task.id} className="flashCard">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onTaskComplete(task.id)}
              />
              <TaskCard task={task} />
              <button onClick={() => onDeleteTask(task.id)} disabled={!task.completed ? true : false}>Delete</button>
            </li>
          ))}
        </ul>
      )}

       <button onClick={handleShowDeleted}>Show deleted</button> 

{
  deletedTasks.length > 0 ? (
    showDeleted && (
      <DeletedTaskCard
        deletedTasks={deletedTasks}
        onRestoreTask={onRestoreTask}
      />
    )
  ) : (
    <p>No task found</p>
  )
}

    </div>
  );
}

export default ViewTask;