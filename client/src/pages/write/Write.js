import { Avatar, Button } from "@material-ui/core";
import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import Sidebar from "../../components/sidebar/Sidebar";
import SideRight from "../../components/SideRight/SideRight"


const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [avatar, setAvatar] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      desc,
    };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post("api/posts", data);
    //   } catch (err) { }
    // }
    try {
      const res = await axios.post("api/posts", newPost);
      console.log(res.data)
      window.location.replace("/");
    } catch (err) { }
  };

  return (
    <div className="home" >
      <Sidebar />
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
            <Avatar src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <input
              onChange={e => setDesc(e.target.value)}
              // onChange={e => setAvatar(e.target.value)}
            placeholder="Share something!"
            type="text"
          />
        </div>

        <Button

          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>

      </div>
      <SideRight />
    </div>
  );
}

export default Write;
