import TaskCard from "./TaskCard";
import DeletedTaskCard from "./DeletedTaskCard";

function ViewTask({
  tasks,
  onDeleteTask,
  onTaskComplete,
  deletedTasks,
  onRestoreTask,
}) {
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
              <button onClick={() => onDeleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}

      {deletedTasks.length > 0 && (
        <DeletedTaskCard
          deletedTasks={deletedTasks}
          onRestoreTask={onRestoreTask}
        />
      )}
    </div>
  );
}

export default ViewTask;
