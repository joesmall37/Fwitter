import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Avatar } from "@material-ui/core";
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        {/* <TwitterIcon className="topbar__twitterIcon" /> */}
        <DirectionsRunIcon className="topbar__twitterIcon" />
        <h4>Tweet Eat & Meet </h4>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              <h4>Home</h4>
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              <h4>Tweet</h4>
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className='topRight'>
          <Link to="/settings">
            <Avatar className='av'src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
          </Link>
            <p className="topListItem" onClick={handleLogout}>
              Welcome,  {user.username}
              <br />
              {user && <h4>Logout</h4>}

            </p>
            </div>




        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                <h4>Login</h4>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                <h4>Register</h4>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
