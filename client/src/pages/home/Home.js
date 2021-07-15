import { useEffect, useState } from "react";
// import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/menu/Menu";
import "./home.css";
// import Feed from "../../components/Feed/Feed";
import SideRight from "../../components/trending/Trending"
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="home">
          <Sidebar />
        <Posts posts={posts} />
        <SideRight />
      </div>
    </>
  );
}
