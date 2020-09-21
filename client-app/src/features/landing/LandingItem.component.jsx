import React from "react";
import { withRouter } from "react-router-dom";

import "./landingItem.styles.css";

function LandingItem({ item, path, image, history, match }) {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${path}`)}
    >
      {/* <Link to={path}> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{item.toUpperCase()}</h1>
        <span className="subtitle">{item}</span>
      </div>
      {/* </Link> */}
    </div>
  );
}

export default withRouter(LandingItem);
