import { createContext, useReducer } from "react";

export const TasksContext = createContext();

export const TasksReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASKS":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "UPDATE_TASKS":
      return {
        tasks: state.tasks.map((task) => {
          return task._id === action.payload._id ? action.payload : task;
        }),
      };
    case "DELETE_TASKS":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const TasksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TasksReducer, {
    tasks: [],
  });

  return (
    <TasksContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
