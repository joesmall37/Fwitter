import Post from "../post/Post";
import "./posts.css";
import FlipMove from "react-flip-move";
import "./posts.css";

export default function Posts({ posts }) {
  return (

        <div className="feed">
            <div className="feed__header">
              <h3>#Feed</h3>
            </div>

            <FlipMove>
            {posts.map((p) => (
              <Post post={p}
                displayName={p.displayName}
                username={p.username}
                verified={p.verified}
                text={p.text}
                likes ={p.likes}
              />
            ))}
          </FlipMove>
      </div >

  );
}
