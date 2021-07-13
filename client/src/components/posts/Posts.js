import Post from "../post/Post";
import "./posts.css";
import FlipMove from "react-flip-move";
import "./posts.css";
// import {
//   TwitterTimelineEmbed,
//   TwitterShareButton,
//   TwitterTweetEmbed,
//   TwitterVideoEmbed
// } from "react-twitter-embed";
// import SearchIcon from "@material-ui/icons/Search";

// import { useState, useEffect,  } from "react";
// import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";


export default function Posts({ posts }) {
  // const [like, setLike] = useState(post.likes.length);
  // useEffect(() => {

  //   const likeHandler = () => {
  //     try {
  //       axios.put("/posts/" + Post._id + "/like",);
  //     } catch (err) { }
  //     setLike(isLiked ? like - 1 : like + 1);
  //     setIsLiked(!isLiked);
  //   };

  return (

        <div className="feed">
            <div className="feed__header">
              <h2>#Feed</h2>
            </div>

            <FlipMove>
            {posts.map((p) => (
              <Post post={p}
                displayName={p.displayName}
                username={p.username}
                verified={p.verified}
                text={p.text}
                avatar={p.avatar}
                image={p.image}
                likes ={p.likes}

              />
            ))}
          </FlipMove>
      </div >

  );
}
