import { useTasksContext } from "./useTaskContext";
import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

export const useTask = () => {
  const [state, setState] = useState({ error: null, isLoading: false });
  const { user } = useAuthContext();
  const { dispatch } = useTasksContext();
  /**
   *
   * @param {string} method - type of api request to send
   * @param {Object} data - json object
   * @param {string} type - the action type in the disaptch call for the context
   * @param {string} workspaceId
   * @param {string} task_id
   * @returns {Promise<void>}
   *
   */
  const tasksApi = async (method, data, type, workspaceId, task_id) => {
    setState({ error: null, isLoading: true });

    let url = `http://localhost:4000/api/workspaces/workspacetasks/${workspaceId}/tasks`;
    if (task_id) {
      url += `/${task_id}`;
    }

    const options = {
      method: method,
      headers: { Authorization: user },
    };

    if (data) {
      options.body = JSON.stringify(data);
      options.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(url, options);
    const json = await response.json();
    console.log(response);

    if (response.ok) {
      dispatch({ type: type, payload: json });
    }
  };
  return { tasksApi, isLoading: state.isLoading, error: state.error };
};
