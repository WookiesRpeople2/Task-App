import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { WorkspaceContextProvider } from "./context/WorkspaceContext.jsx";
import { TasksContextProvider } from "./context/TasksContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <WorkspaceContextProvider>
        <TasksContextProvider>
          <App />
        </TasksContextProvider>
      </WorkspaceContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
