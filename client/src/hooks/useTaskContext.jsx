import { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error("no workspace Context");
  }

  return context;
};
