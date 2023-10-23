import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import GuestNav from "../Nav/GuestNav";

const GuestLayout = ({ children }) => {
  const { user } = useAuthContext();

  if (user) {
    return <Navigate to="/user" />;
  }

  return (
    <div>
      <GuestNav />
      <Outlet />
    </div>
  );
};
export default GuestLayout;
