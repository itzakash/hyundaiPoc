import { Route, Routes } from "react-router-dom";
import { Login } from "../components/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../components/Dashboard";
import { Users } from "../components/Users";
// import { Users } from "../components/Users";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      ></Route>
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
};

export default AppRouting;
