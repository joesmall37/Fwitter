
import React from "react";
import "./Menu.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../menuoptions/MenuOptions";
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
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import RestaurantIcon from '@material-ui/icons/Restaurant';

function Sidebar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (

    <div className="sidebar">
      <SidebarOption Icon={DirectionsRunIcon} text="Menu" />
      <FlipMove>
        <SidebarOption Icon={DirectionsBikeIcon} text="Cardio" />
        <SidebarOption Icon={FitnessCenterIcon} text="Weights" />
        <SidebarOption Icon={LocalDiningIcon } text="Diets to gain mass" />
        <SidebarOption Icon={RestaurantIcon} text="Diets to lose weight" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <Link className="link" to="/login">
          <SidebarOption Icon={LockIcon} text={"Login"}/>
        </Link>
        <Link className="link" to="/register">
          <SidebarOption Icon={EmojiEventsIcon} text={"Register"} />
        </Link>
      <Link className="link" to="/settings">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        </Link>
        <Link className="link" onClick={handleLogout}>
          <SidebarOption Icon={DriveEtaIcon} text={user && "Logout"} />
        </Link>
      </FlipMove>
      <Link className="link" to="/write">
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Fweet
      </Button>
      </Link>
      </div>
  );
}

export default Sidebar;
