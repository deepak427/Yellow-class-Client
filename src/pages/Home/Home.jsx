import React, { useState } from "react";
import "./Home.css";
import SignUp from "../../components/SignUp/SignUp";
import { login } from "../../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Enter email and password");
      return;
    }

    dispatch(
      login(
        {
          password,
          email,
        },
        navigate
      )
    );
  };

  return (
    <div className="auth-main">
      <div className="auth-container">
        {isLogin || user ? (
          <>
            {user ? (
              <>
                {" "}
                <h1>Verify</h1>
                <p>You are logged in, but please verify to access.</p>
              </>
            ) : (
              <>
                <h1>Login</h1>
                <p>Welcome! Login to access your account.</p>
              </>
            )}
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">
                <h4>Email</h4>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="password">
                <h4>Password</h4>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </label>
              <button type="submit" className="login-btn">
                Log in
              </button>
            </form>
            <p>
              Did't have account?{" "}
              <button
                onClick={() => {
                  user ? alert("Please log out first") : setIsLogin(!isLogin);
                }}
                type="button"
                className="switch-btn"
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          <SignUp isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
};

export default Home;
