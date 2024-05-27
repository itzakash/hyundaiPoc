import { useState } from "react";
import useHttp from "../hooks/use-http";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const { sendRequest } = useHttp();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    sendRequest(
      {
        method: "POST",
        body: loginForm,
        url: "http://localhost:3001/login",
      },
      (responseData) => {
        console.log(responseData, isAuthenticated);

        if (responseData.status === 200) {
          console.log("Hello");
          dispatch({
            type: "LOGIN",
          });
          navigate("/users");
        }
      }
    );
  };
  return (
    <>
      <div className="background-container">
        <div className="login-form">
          <div className="child-login-form">
            <h2>Hynduai Safety Analytics</h2>
            <h3>Login</h3>
            <form onSubmit={handleLogin}>
              <div className="input-container">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={loginForm.username}
                  onChange={(e) => {
                    setLoginForm({ ...loginForm, username: e.target.value });
                  }}
                  required
                />
              </div>
              <div className="input-container">
                <i className="fas fa-key"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={loginForm.password}
                  onChange={(e) => {
                    setLoginForm({ ...loginForm, password: e.target.value });
                  }}
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
