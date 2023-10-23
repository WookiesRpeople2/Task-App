import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import UserNav from "../Nav/UserNav";

const UserLayout = () => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return <p>Loading..</p>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <UserNav />
      <Outlet />
    </div>
  );
};

export default UserLayout;
