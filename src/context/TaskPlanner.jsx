import { createContext, useContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  // const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(null);

  const [tasks, setTasks] = useState([
    {
      id: "aklsjdklasjd",
      title: "task title",
      description: "this is the description of the task",
      priority: "highest",
    },
  ]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  // useEffect(() => {
  //   const getTime = setInterval(() => {
  //     const currentTime = new Date().toLocaleTimeString();
  //     setTime(currentTime);
  //   }, 1000);

  //   return () => {
  //     clearInterval(getTime);
  //   };
  // }, []);

  const value = { date, setDate, addTask, tasks };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);

export default TaskContextProvider;
