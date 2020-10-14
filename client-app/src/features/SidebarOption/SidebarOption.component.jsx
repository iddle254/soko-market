import React from "react";
import {Link } from "react-router-dom";
import "./SidebarOption.styles.css";

function SidebarOption({ title, Icon, path }) {
  return (
    <Link to={path}>
    <div className="sidebarOption">
      {/* <div className="sidebarOption__title"> */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
      {/* </div> */}
    </div>
    </Link>
  );
}

export default SidebarOption;
