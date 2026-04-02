function TaskItem({ title }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} title={task.title} />
      ))}
    </div>
  );
}

export default TaskList;
