import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./EditPost.css";
import moment from 'moment';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log('test')
    console.log(path)
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      console.log(res)
      setPost(res.data);
      setText(res.data.text);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) { console.log(err)}

  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/api/posts/${post._id}`, {
        username: user.username,
        text,
      });

      window.location.replace("/");
    } catch (err) { }
  };
  return (
    <div className="singlepost">
          <div className="singlepost__body">
          <div className="post__avatar">

          <Avatar src="data:image/jpeg;base64,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" />
            </div>
            <div className="post__headerText">
              <h3>

                {post.username}{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  <br />
                  @
                  {post.username}
                </span>
              </h3>
              <span className="postDate">
                 {moment(post.createdAt).format('h:mm A - MMMM Do YYYY')}
              </span>
            </div>
              <textarea
                className="singlepost__headerdescription"
          value={text}
                onChange={(e) => setText(e.target.value)}
              />
            <br />
            <div classs="singlebtns">
                <button className="singlePostButton" onClick={handleUpdate}>
                Update
              </button>
              <button className="singlePostButton" onClick={() => handleDelete()} >
                Delete
              </button>
            </div>
          </div>
    </div>
  );
}
