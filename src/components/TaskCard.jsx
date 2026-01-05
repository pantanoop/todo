function TaskCard( {task }){
    return(
        <div classname="taskCard">
            <li key={task.id}>
              <div className="task-item">
                {task.text}
              </div>
            </li>
        </div>
    )
}

export default TaskCard;