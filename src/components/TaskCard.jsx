function TaskCard({ task }) {
  return (
    <div
      className="task-item"
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "green" : "black",
      }}
    >
      {task.text}
      <div
        style={{ fontSize: "12px", color: task.completed ? "green" : "orange" }}
      >
        Status: {task.completed ? "Completed" : "Pending"}
      </div>
    </div>
  );
}

export default TaskCard;
