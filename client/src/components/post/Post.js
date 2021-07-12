import React, { forwardRef } from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
// import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback} from "react";
import axios from "axios";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBox from '../../components/ChatBox/Chatbox'
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar, post }, ref) => {
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
      try {
        axios.put("/posts/" + post._id + "/like",);
      } catch (err) { }
      setIsLiked(prevIsLiked => {
        setLike(prevLike => prevIsLiked ? prevLike - 1 : prevLike + 1);
        return !prevIsLiked
      });
    }, [post._id])

    const likeHandler = useCallback(() => {
      try {
        axios.put("/posts/" + post._id + "/like",);
      } catch (err) { }
      setIsLiked(prevIsLiked => {
        setLike(prevLike => prevIsLiked ? prevLike - 1 : prevLike + 1);
        return !prevIsLiked
      });
    }, [post._id]);
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          {/* <Avatar src={avatar} /> */}
          <Avatar src="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>

                {username}{" "}
                <span className="post__headerSpecial">
                  <VerifiedUserIcon className="post__badge" />
                  <br/>
                @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}
                <Link to={`/post/${post._id}`} className="link">
                  <p className="postDesc">{post.desc}</p>
                </Link>
              </p>
            </div>
          </div>
          <img src={image} alt="" />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}

          </span>
          <p>

          </p>
<hr />
          <div className="post__footer">
            {/* <ChatBubbleOutlineIcon fontSize="small"

            /> */}
       <ChatBox />
            <RepeatIcon fontSize="small" />
            <span className="postLikeCounter">{like} </span>
            <FavoriteBorderIcon fontSize="small" onClick={likeHandler} />
            <ThumbDownIcon fontSize="small" onClick={likeHandler}/>
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
