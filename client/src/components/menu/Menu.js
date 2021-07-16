import React from "react";
import "./Menu.css";
import SidebarOption from "../menuoptions/MenuOptions";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FlipMove from "react-flip-move";
import { Context } from "../../context/Context";
import { useContext } from "react";
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
      <Link className="link" to="/settings">
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
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
