import { useTask } from "@/context/TaskPlanner";

// importing custom components
import Tasks from "./Tasks";

const TasksContainer = () => {
  const { tasks } = useTask();

  // Group tasks once — much more efficient and cleaner
  const tasksByPriority = {
    highest: tasks.filter((t) => t.priority === "highest"),
    medium: tasks.filter((t) => t.priority === "medium"),
    lowest: tasks.filter((t) => t.priority === "lowest"),
  };

  // Optional: define columns in array → easy to reorder / add more later
  const columns = [
    {
      title: "Highest Priority",
      key: "Highest",
      tasks: tasksByPriority.highest,
    },
    { title: "Medium Priority", key: "Medium", tasks: tasksByPriority.medium },
    { title: "Lowest Priority", key: "Lowest", tasks: tasksByPriority.lowest },
  ];

  return (
    <div className="h-[90%] py-6 max-w-7xl mx-auto">
      <div className="flex gap-4 h-full">
        {columns.map((column) => (
          <div
            key={column.key}
            className="relative flex-1 flex flex-col gap-3 bg-white p-5 rounded-xl shadow-sm overflow-hidden border border-stone-200"
          >
            <h2 className="text-lg font-semibold text-gray-800 pb-2 border-b">
              {column.title} ({column.tasks.length})
            </h2>

            <div className="flex-1 overflow-y-auto">
              {column.tasks.length > 0 ? (
                <Tasks tasks={column.tasks} />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                  No tasks
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksContainer;
