import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkspaceCard from "../../components/Workspaces/WorkspaceCard";
import { useWorkspaceContext } from "../../hooks/useWorkspaceContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const UserHome = () => {
  const { workspace, dispatch } = useWorkspaceContext();
  const [error, setError] = useState(null);
  const { user } = useAuthContext();
  useEffect(() => {
    const setWorkspace = async () => {
      const response = await fetch("http://localhost:4000/api/workspaces", {
        method: "GET",
        headers: {
          Authorization: user,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKSPACE", payload: json });
      }

      if (!response.ok) {
        setError(json.error);
      }
    };
    if (user) {
      setWorkspace();
    }
  }, []);

  return (
    <div className="h-screen">
      <h1 className="text-xl">Workspaces:</h1>
      {workspace &&
        workspace.map((work) => (
          <Link key={work._id} to={`/user/workspace/${work._id}`}>
            <WorkspaceCard workspaceName={work.name} />
          </Link>
        ))}
    </div>
  );
};

export default UserHome;
