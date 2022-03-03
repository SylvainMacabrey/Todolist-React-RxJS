import { useTasks } from "./rxjs";

const TasksHeader = () => {

  const tasks = useTasks();

  const undoneTasks = tasks.filter((task) => task.done === false).length;

  return (
    <header>
      <h1>React Todo List</h1>
      <p>
        Tâches à faire : <strong>{ undoneTasks }</strong>
      </p>
    </header>
  );
};

export default TasksHeader;
