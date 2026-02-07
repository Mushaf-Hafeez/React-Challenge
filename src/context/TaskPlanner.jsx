import { createContext, useContext, useEffect, useState } from "react";

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(null);

  useEffect(() => {
    const getTime = setInterval(() => {
      const currentTime = new Date().toLocaleTimeString();
      setTime(currentTime);
    }, 1000);

    return () => {
      clearInterval(getTime);
    };
  }, []);

  const value = { time, date, setDate };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTask = () => useContext(TaskContext);

export default TaskContextProvider;
