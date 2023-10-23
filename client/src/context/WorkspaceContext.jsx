import { createContext, useReducer } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKSPACE":
      return { workspace: action.payload };
    case "CREATE_WORKSPACE":
      return {
        workspace: [action.payload, ...state.workspace],
      };
    case "DELETE_WORKSPACE":
      return {
        workspace: state.workspace.filter(
          (work) => work._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkspaceContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WorkspaceReducer, {
    workspace: [],
  });

  return (
    <WorkspaceContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkspaceContext.Provider>
  );
};
