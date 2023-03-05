import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faHome,
  faMoneyBill,
  faPerson,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const LeftSideBar = () => {
  return (
    <nav className="side-nav">
      <div className="side-nav-logo">
        <h2 style={{padding: "1.5rem"}}>MDH</h2>
        <FontAwesomeIcon
          style={{ padding: "0.5rem 0.5rem 0.5rem 1rem" }}
          icon={faAngleDoubleRight}
        />
      </div>
      <NavLink to="/" className="side-nav-links" activeclass="active">
        <FontAwesomeIcon
          style={{ padding: "1rem" }}
          icon={faHome}
        />
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/"}
        className="side-nav-links"
        activeclass="active"
      >
        <FontAwesomeIcon
          style={{ padding: "1rem" }}
          icon={faMoneyBill}
        />
        <p>Subscription</p>
      </NavLink>
      <NavLink to="/" className="side-nav-links" activeclass="active">
        <FontAwesomeIcon
          style={{ padding: "1rem" }}
          icon={faUserGroup}
        />
        <p>Contact</p>
      </NavLink>
      <NavLink
        to="/"
        className="side-nav-links find-friends"
        activeclass="active"
      >
        <FontAwesomeIcon
          style={{ padding: "1rem" }}
          icon={faPerson}
        />
        <p>Friends</p>
      </NavLink>
    </nav>
  );
};

export default LeftSideBar;
