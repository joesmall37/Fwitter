
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
import Weights from "../../pages/weights/weights";
import Cardio from "../../pages/cardio/cardio";
import WeightGain from "../../pages/weightgain/WeightGain";
import WeightLoss from "../../pages/weightloss/WeightLoss";

function Sidebar() {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (

    <div className="sidebar">
      <SidebarOption Icon={DirectionsRunIcon} text="Menu" />
      <FlipMove>



        <Link className="link" to="/cardio">
          <SidebarOption Icon={DirectionsBikeIcon} text={"Cardio"} />
        </Link>






        <Link className="link" to="/weights">
          <SidebarOption Icon={FitnessCenterIcon} text={"Weights"} />
        </Link>



        <Link className="link" to="/WeightGain">
          <SidebarOption Icon={LocalDiningIcon} text={"Diet for Gains"} />
        </Link>


        <Link className="link" to="/WeightLoss">
          <SidebarOption Icon={RestaurantIcon} text={"Diet for Cutting"} />
        </Link>


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
