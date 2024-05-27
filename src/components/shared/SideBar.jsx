import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.css";
export const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };
  return (
    <aside className="sidebar">
      <ul>
        <li>
          {" "}
          <NavLink to="/"> Dashboard</NavLink>
        </li>
        <li>Data Exploration</li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>Settings</li>
        <li>Messages</li>
        <li>Projects</li>
        <li>Calendar</li>
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </aside>
  );
};
