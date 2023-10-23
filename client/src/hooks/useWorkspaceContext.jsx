import { useContext } from "react";
import { WorkspaceContext } from "../context/WorkspaceContext";

export const useWorkspaceContext = () => {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw Error("no workspace Context");
  }

  return context;
};
