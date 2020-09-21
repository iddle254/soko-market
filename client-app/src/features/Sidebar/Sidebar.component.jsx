import React from "react";
import "./sidebar.styles.css";
import SidebarOption from "../SidebarOption/SidebarOption.component";
import FilterListIcon from "@material-ui/icons/FilterList";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import StorefrontIcon from "@material-ui/icons/Storefront";
import ExploreOffIcon from "@material-ui/icons/ExploreOff";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../assets/logo.jpg";
// import { useDataLayerValue } from "../../context/DataLayer.context";

function Sidebar() {
  // const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img src={logo} alt="logo" />
      <div>
        <SidebarOption
          Icon={FilterListIcon}
          title="Events"
          path="/activities"
        />
        <hr />
        <SidebarOption
          Icon={AddCircleOutlineIcon}
          title="Host an event"
          path="/createActivity"
        />
        <hr />
        <SidebarOption
          Icon={StorefrontIcon}
          title="Your store"
          path="/profile"
        />
        <hr />
        <SidebarOption
          Icon={ExploreOffIcon}
          title="Post an ad"
          path="/postAd"
        />
        <hr />
        <SidebarOption Icon={HomeIcon} title="My store" path="/profile" />
        <hr />
        <SidebarOption
          Icon={AccountCircleIcon}
          title="Profile"
          path="/profile"
        />
        <hr />

        {/* <br />
        <strong className="sidebar__title">PLAYLISTS</strong> */}
        {/* <hr /> */}
        {/* {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))} */}
      </div>
    </div>
  );
}

export default Sidebar;
