import { useAuthContext } from "./useAuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

export const useAuth = () => {
  const [state, setState] = useState({ error: null, isLoading: false });
  const { user, loading, dispatch } = useAuthContext();

  /**
   *
   * @param {string} apiEndpoint
   * @param {string} email
   * @param {string} password
   * @returns {Promise<void>}
   */
  const auth = async (apiEndpoint, email, password) => {
    setState({ error: null, isLoading: true });

    const response = await fetch(
      `http://localhost:4000/api/user/${apiEndpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setState({ error: json.error, isLoading: false });
    }

    if (response.ok) {
      Cookies.set("session", `Bearer ${json.token}`, { expires: 3600 });
      dispatch({ type: "LOGIN", payload: `Bearer ${json.token}` });
    }
  };

  const updateUser = async (data) => {
    setState({ error: null, isLoading: true });

    const response = await fetch(`http://localhost:4000/api/user/edit`, {
      method: "PATCH",
      headers: { Authorization: user, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await response.json();

    if (!response.ok) {
      setState({ error: json.error, isLoading: false });
    }

    if (response.ok) {
      Cookies.set("session", `Bearer ${json.token}`, { expires: 3600 });
      dispatch({ type: "LOGIN", payload: `Bearer ${json.token}` });
    }
  };

  return { auth, updateUser, isLoading: state.isLoading, error: state.error };
};
