import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//layouts
import GuestLayout from "./components/Layouts/GuestLayout";
import UserLayout from "./components/Layouts/UserLayout";

//pages & components
import UserHome from "./pages/User/UserHome";
import GuestHome from "./pages/Guest/GuestHome";
import Login from "./pages/Guest/Auth/Login";
import Signup from "./pages/Guest/Auth/Signup";
import WorkspaceView from "./pages/User/WorkspaceView";
import EditProfile from "./pages/User/EditProfile";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<UserHome />} />
        <Route path="/user/editprofile" element={<EditProfile />} />
        <Route
          path="/user/workspace/:workspaceId"
          element={<WorkspaceView />}
        />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path="/" element={<GuestHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
