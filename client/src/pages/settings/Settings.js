import "./settings.css";
import SidebarRight from "../../components/SideRight/SideRight";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import ChatBox from '../../components/ChatBox/Chatbox';
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };

    try {
      const res = await axios.put("api/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      console.log('success')
      window.location.replace("/");
    } catch (err) {
      console.log('failure')
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <Sidebar />
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>

          <div className="settingsPP">

            <Avatar src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <label htmlFor="fileInput">
            </label>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="settingsSubmit" type="submit" onSubmit={handleSubmit}>
            Update
          </button>
          {success && (
            <span className="update">
              Your profile has been updated
            </span>
          )}
        </form>
      </div>
      <SidebarRight />
      <ChatBox />
    </div>
  );
}
