
import React from "react";
import "./sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../sidebaroptions/SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FlipMove from "react-flip-move";
import LockIcon from '@material-ui/icons/Lock';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { Context } from "../../context/Context";
import { useContext } from "react";
import DriveEtaIcon from '@material-ui/icons/DriveEta';

function Sidebar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="sidebar">
{/*
      <TwitterIcon className="sidebar__twitterIcon" /> */}
      <DirectionsRunIcon className="sidebar__twitterIcon" />
      <FlipMove>
        <Link className="link" to="/home">
          <SidebarOption Icon={HomeIcon} text="Home" />
        </Link>
      <SidebarOption active Icon={HomeIcon} text="Home" />

      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={FitnessCenterIcon} text="Group Workouts" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Groups" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        {/* login */}
        <Link className="link" to="/login">
          <SidebarOption Icon={LockIcon} text={"Login"}/>
        </Link>
        {/* register */}
        <Link className="link" to="/register">
          <SidebarOption Icon={EmojiEventsIcon} text={"Register"} />
        </Link>

      <Link className="link" to="/settings">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        </Link>
        <Link className="link" onClick={handleLogout}>
          <SidebarOption Icon={DriveEtaIcon} text={user && "Logout"} />
          {/* {user && <h4>Logout</h4>} */}
        </Link>


      <SidebarOption Icon={MoreHorizIcon} text="More" />
      </FlipMove>
      {/* Button -> Tweet */}
      <Link className="link" to="/write">
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
      </Button>
      </Link>


    </div>
  );
}

export default Sidebar;
