import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlePost.css";
import moment from 'moment';
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Avatar } from "@material-ui/core";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // const [updateMode, setUpdateMode] = useState(true);

  useEffect(() => {
    console.log('test')
    console.log(path)
    const getPost = async () => {
      const res = await axios.get("/api/posts/" + path);
      console.log(res)
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
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
        title,
        desc,
      });

      window.location.replace("/");
    } catch (err) { }
  };
  return (
    <div className="singlepost">
          <div className="singlepost__body">
          <div className="post__avatar">

              <Avatar src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
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
                className="singlepost__body"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            <br />
            <div classs="btns">
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
