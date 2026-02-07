// importing custom components
import Task from "./Task";

const Tasks = ({ tasks }) => {
  return (
    <div className="flex flex-col gap-2">
      {tasks.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Tasks;
