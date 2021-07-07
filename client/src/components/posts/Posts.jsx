import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {/* map over each post and call the post component */}
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
