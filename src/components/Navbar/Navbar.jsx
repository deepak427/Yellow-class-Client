import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import Avatar from "../Avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../actions/currentUser";

const Navbar = () => {
  const user = useSelector((state) => state.currentUserReducer)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
  };

  return (
    <nav className="main-nav">
      {" "}
      <h2 style={{padding: "0 1rem", marginRight: "auto"}} >Yellow Class</h2>
      <Link to="/" className="nav-item nav-btn about">
        About
      </Link>
      <Link to="/" className="nav-item nav-btn products">
        Products
      </Link>
      <Link to="/" className="nav-item nav-btn forTeams">
        ForTeams
      </Link>
      {user === null ? (
        <Link to="/" className="nav-item nav-links">
          Log in
        </Link>
      ) : (
        <>
          <Link to="/" className="nav-image" style={{ textDecoration: "none" }}>
            <Avatar
              backgroundColor="#009dff"
              px="0.8rem"
              py="0.45rem"
              color="white"
              borderRadius="50%"
            >{user.result[0].name.charAt(0).toUpperCase()}</Avatar>
          </Link>
          <button className="nav-item nav-links" onClick={handleLogOut} >
            Log out
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
