import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import SideRight from "../../components/SideRight/SideRight"

export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <SinglePost />
      <SideRight />

    </div>
  );
}
