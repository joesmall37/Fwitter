import Post from "../post/Post";
import "./posts.css";
import FlipMove from "react-flip-move";
import "./posts.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterVideoEmbed
} from "react-twitter-embed";
// import SearchIcon from "@material-ui/icons/Search";

import { useState, useEffect,  } from "react";
import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";


export default function Posts({ posts }) {
  const [like, setLike] = useState(Post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {

    const likeHandler = () => {
      try {
        axios.put("/posts/" + Post._id + "/like",);
      } catch (err) { }
      setLike(isLiked ? like - 1 : like + 1);
      setIsLiked(!isLiked);
    };
    return (
      <div>
        <FlipMove>
          <div className="posts">

            {posts.map((p) => (
              <Post post={p} />
            ))}
          </div>
        </FlipMove>

        <div className="postBottomLeft">
          <img
            className="likeIcon"
            src={`like.png`}
            onClick={likeHandler}
            alt=""
          />
          <img
            className="likeIcon"
            src={`heart.png`}
            onClick={likeHandler}
            alt=""
          />
          <span className="postLikeCounter">{like} people like this post</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{Post.comment} comments</span>
        </div>


        <div className="widgets">
          {/* <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Eat and Tweet" type="text" />
        </div> */}

          <div className="widgets__widgetContainer">
            <h2> Recent Posts</h2>

            <TwitterTweetEmbed tweetId={"1412623232029523973"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="RealSkipBayless
"
              options={{ height: 400 }}
            />
            <TwitterVideoEmbed
              id={'1405189568916193283'}
            />
            <TwitterTweetEmbed tweetId={"1412959480095117316"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="trainer2thepros

"
              options={{ height: 400 }}
            />
            <TwitterTweetEmbed tweetId={"1373292159416348676"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="TimJDillon

"
              options={{ height: 400 }}
            />
            <TwitterTweetEmbed tweetId={"1413273908535599104"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="elonmusk
"
              options={{ height: 400 }}
            />
            <TwitterTweetEmbed tweetId={"1411727413374078990"} />

            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="krystalball
"
              options={{ height: 400 }}
            />

            <TwitterShareButton
              url={"https://facebook.com/cleverprogrammer"}
              options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
            />



          </div>
        </div>
      </div >
    )
  })
}
