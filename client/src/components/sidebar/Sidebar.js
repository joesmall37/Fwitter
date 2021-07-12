
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
function Sidebar() {
  return (
    <div className="sidebar">
{/*
      <TwitterIcon className="sidebar__twitterIcon" /> */}
      <DirectionsRunIcon className="sidebar__twitterIcon" />
      <FlipMove>
      <SidebarOption active Icon={HomeIcon} text="Home" />

      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={FitnessCenterIcon} text="Group Workouts" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Groups" />
      <SidebarOption Icon={ListAltIcon} text="Lists" />
      <Link className="link" to="/settings">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
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
