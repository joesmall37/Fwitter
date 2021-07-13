import "./Edit.css";
import Sidebar from "../../components/menu/Menu";
import SinglePost from "../../components/editpost/EditPost";
import SideRight from "../../components/trending/Trending"

export default function Single() {
  return (
    <div className="single">
      <Sidebar className='left' />
      <SinglePost className='center'/>
      <SideRight className='right'/>

    </div>
  );
}
