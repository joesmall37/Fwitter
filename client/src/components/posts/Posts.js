import Post from "../post/Post";
import "./posts.css";
import FlipMove from "react-flip-move";
import "./posts.css";

export default function Posts({ posts }) {
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
