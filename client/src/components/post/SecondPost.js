import "./post.css";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback, forwardRef } from "react";
import axios from "axios";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";





export default function Post({ post }) {
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
        <div className="post">
            {/* {post.photo && <img className="postImg" src={PF + post.photo} alt="" />} */}
            <div className="postInfo">
                {/* <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div> */}
                {/* <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link> */}
                <hr />
                <div className="post__body">
                    <div className="post__avatar">
                        <Avatar src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </div>
                    <div className="post__headerText">
                        <h3>
                            Header
            {/* {displayName}{" "} */}
                            <span className="post__headerSpecial">
                                {/* {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username} */}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Text</p>
                    </div>
                    <Link to={`/post/${post._id}`} className="link">
                        <p className="postDesc">{post.desc}</p>
                    </Link>
                    <span className="postDate">
                        {new Date(post.createdAt).toDateString()}
                    </span>
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>

            <div className="postBottomLeft">
                <img
                    className="likeIcon"
                    src={``}
                    onClick={likeHandler}
                    alt=""
                />
                <img
                    className="likeIcon"
                    src={``}
                    onClick={likeHandler}
                    alt=""
                />
                <span className="postLikeCounter">{like} </span>
            </div>
            {/* <div className="postBottomRight">
        <span className="postCommentText">{Post.comment} comments</span>
      </div> */}

        </div>

    );
}
