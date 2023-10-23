import { Link } from "react-router-dom";

const GuestNav = () => {
  return (
    <div className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-6">
      <Link to="/" className="text-4xl">
        Task App
      </Link>
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default GuestNav;
