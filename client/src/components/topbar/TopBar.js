import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Avatar } from "@material-ui/core";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <TwitterIcon className="topbar__twitterIcon" />
        <h4>Sweat Tweet Eat & Meet </h4>
        {/* <h3>Eat and Tweet</h3> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <h4>Home</h4>
            </Link>
          </li>
          {/* <li className="topListItem">
            <Link className="link" to="/">
              Sweat
            </Link>
          </li> */}
          {/* <li className="topListItem">
            <Link className="link" to="/">

            </Link>
          </li> */}
          <li className="topListItem">
            <Link className="link" to="/write">
              <h4>Tweet</h4>
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && <h4>Logout</h4>}

          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* <img className="topImg" src={PF+user.profilePic} alt="" /> */}
            <Avatar src="https://images.pexels.com/photos/3490348/pexels-photo-3490348.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </Link>

        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                <h4>Login</h4>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                <h5>Register</h5>
              </Link>
            </li>
          </ul>
        )}
        {/* <i className="topSearchIcon fas fa-search"></i> */}
      </div>
    </div>
  );
}
