
import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import db from "./firebase";
import FlipMove from "react-flip-move";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Feed;






// import { useContext, useEffect, useState } from "react";
// import Post from "../post/Post";
// import Share from "../share/Share";
// import "./feed.css";
// import axios from "axios";
// import { AuthContext } from "../../context/AuthContext";

// export default function Feed({ username }) {
//     const [posts, setPosts] = useState([]);
//     const { user } = useContext(AuthContext);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const res = username
//                 ? await axios.get("/posts/profile/" + username)
//                 : await axios.get("posts/timeline/" + user._id);
//             setPosts(
//                 res.data.sort((p1, p2) => {
//                     return new Date(p2.createdAt) - new Date(p1.createdAt);
//                 })
//             );
//         };
//         fetchPosts();
//     }, [username, user._id]);

//     return (
//         <div className="feed">
//             <div className="feedWrapper">
//                 {(!username || username === user.username) && <Share />}
//                 {posts.map((p) => (
//                     <Post key={p._id} post={p} />
//                 ))}
//             </div>
//         </div>
//     );
// }
