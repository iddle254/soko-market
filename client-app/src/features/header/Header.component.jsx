import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./header.styles.css";
// import { Avatar } from "./node_modules/@material-ui/core";
// import { useDataLayerValue } from "../../context/DataLayer.context";

function Header({ searchItem }) {
  // const [{ user }, dispatch] = useDataLayerValue();
  const [searchInput, setSearchInput] = useState(searchItem);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Restaurants"
          type="text"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      {/* <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div> */}
    </div>
  );
}

export default Header;
