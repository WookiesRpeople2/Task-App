import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <div className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-6">
      <Link to="/user" className="text-4xl">
        Task App
      </Link>
      <Link to="/user/editprofile"> Edit your profile</Link>
    </div>
  );
};

export default UserNav;
