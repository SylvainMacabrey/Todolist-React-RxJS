import TaskItem from "./TaskItem";
import { useTasks } from "./rxjs";

const TasksList = () => {

  const tasks = useTasks();

  return (
    <>
      { tasks.map((task) => (
        <TaskItem task={ task } key={ task.id } />
      ))}
    </>
  );

};

export default TasksList;
