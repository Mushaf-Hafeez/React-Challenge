// importing shadcn ui components
import { Button } from "../ui/button";

import { useTask } from "@/context/TaskPlanner";

import { Trash2 } from "lucide-react";

import toast from "react-hot-toast";

const Task = ({ item }) => {
  const { deleteTask } = useTask();

  // handleDelete function
  const handleDelete = (id) => {
    deleteTask(id);
    toast.success("Task deleted.");
  };

  return (
    <div className="flex flex-col gap-2 p-3 rounded-lg shadow-lg shadow-stone-400/80 border-2 border-stone-200">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <Button
          variant="destructive"
          type={"icon"}
          className={"cursor-pointer"}
          onClick={() => handleDelete(item.id)}
        >
          <Trash2 />
        </Button>
      </div>
      <p className="text-stone-400">{item.description}</p>
    </div>
  );
};

export default Task;
