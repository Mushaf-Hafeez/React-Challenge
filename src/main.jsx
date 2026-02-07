import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import TaskContextProvider from "./context/TaskPlanner";

createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <App />
    <Toaster />
  </TaskContextProvider>,
);
