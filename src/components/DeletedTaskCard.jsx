function DeletedTaskCard({ deletedTasks, onRestoreTask }) {
  return (
    <>
      <h3>Deleted Tasks</h3>
      <ul style={{ listStyle: "none" }}>
        {deletedTasks.map((task) => (
          <li key={task.id} className="flashCard">
            <span style={{ textDecoration: "line-through", color: "#a1a1a1" }}>
              {task.text}
            </span>
            <span style={{ color: "red", marginLeft: "10px" }}>Deleted</span>
            <button
              onClick={() => onRestoreTask(task.id)}
              style={{ backgroundColor: "#3498db" }}
            >
              Restore
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DeletedTaskCard;
