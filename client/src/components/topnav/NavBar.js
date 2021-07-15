import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./NavBar.css";
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
        <Link className="link" to="/">
          <DirectionsRunIcon className="topbar__twitterIcon" />
          <h4>Fwitter </h4>
        </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            </li>
            <li className="topListItem">
              <Link className="link" to="/write">
                <h4>Fweet</h4>
              </Link>
            </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className='topRight'>
          <Link to="/settings">
              <Avatar className='av' src="data:image/jpeg;base64,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" />
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
