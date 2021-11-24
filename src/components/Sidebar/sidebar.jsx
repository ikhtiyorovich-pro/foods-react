import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";

// Images
import Logo from "../../assets/images/site-logo.svg";
import LogoOut from "../../assets/images/log-out.svg";
import Home from "../../Lib/Svgs/Home";
import Discount from "../../Lib/Svgs/Discount";
import Dashboard from "../../Lib/Svgs/Dashboard";
import Message from "../../Lib/Svgs/Message";
import Notification from "../../Lib/Svgs/Notification";
import Settings from "../../Lib/Svgs/Settings";

function Sidebar() {
  const handleAddClass = evt => {
    const allActiveClass = document.querySelectorAll(".link-active");

    allActiveClass.forEach(Link => Link.classList.remove("link-active"));
    evt.currentTarget.classList.add("link-active");
  };

  return (
    <div className="sidebar">
      <NavLink className="logo" to="/">
        <img
          className="site-logo"
          src={Logo}
          alt="there is a site logo"
          width="50"
          height="50"
        />
      </NavLink>
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <Link className="link link-active" to="/" onClick={handleAddClass}>
            <span>
              <Home />
            </span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link 
          
            className="link"
            to="/discount"
            onClick={handleAddClass}
          >
            <span>
              <Discount />
            </span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link 
            className="link"
            to="/dashboard"
            onClick={handleAddClass}
            
          >
            <span>
              <Dashboard/>
            </span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link 
            className="link"
            to="/message"
            onClick={handleAddClass}
          >
            <span>
              <Message />
            </span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link 
            className="link"
            to="/notification"
            onClick={handleAddClass}
          >
            <span>
              <Notification />
            </span>
          </Link>
        </li>
        <li className="sidebar__item">
          <Link 
            className="link"
            to="/settings"
            onClick={handleAddClass}
          >
            <span>
              <Settings />
            </span>
          </Link>
        </li>
        <button className="log-out-btn">
          <Link to="/login">
            <img src={LogoOut} alt="" />
          </Link>
        </button>
      </ul>
    </div>
  );
}

export default Sidebar;
