// importin custom components
import Header from "./Header";
import TasksContainer from "./TasksContainer";

const TaskPlanner = () => {
  return (
    <div className="h-screen w-full bg-stone-200">
      {/* Header */}
      <Header />

      {/* Tasks */}
      <TasksContainer />
    </div>
  );
};

export default TaskPlanner;
