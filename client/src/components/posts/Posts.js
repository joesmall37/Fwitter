import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div>
    <h1> My Feed</h1>
    <div className="posts">

      {posts.map((p) => (
        <Post post={p} />
      ))}
      </div>
      </div>
  );
}
