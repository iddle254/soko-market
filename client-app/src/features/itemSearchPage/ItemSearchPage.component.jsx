import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import Header from "../header/Header.component";
import Movie from "../restaurantList/Movie.component";
import Groceries from "../restaurantList/Groceries.component";
import Apparel from "../restaurantList/Apparel.component";
import Photography from "../restaurantList/Photography.component";
import Rooms from "../restaurantList/Rooms.component";
import Errands from "../restaurantList/Errands.component";
import Community from "../restaurantList/Community.component";
import Housing from "../restaurantList/Housing.component";
import Tickets from "../restaurantList/Tickets.component";
import Makeup from "../restaurantList/Makeup.component";
import Headphones from "../restaurantList/Headphones.component";

function ItemSearchPage(props) {
  const [locationSearched, setLocationSearched] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="itemSearchPage"
      style={{ display: "flex", flexDirection: "row" }}
    >
      <Sidebar />
      <div
        style={{
          display: "flex",
          flex: 0.8,
          flexDirection: "column",
          marginLeft: "20px",
        }}
      >
        <div
          className="itemSearchPage__header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            flex: 0.2,
          }}
        >
          <Header searchItem={props.match.params.item} />
        </div>
        <div>
          {props.match.params.item === "groceries" && <Groceries />}
          {/* <Movie /> */}
          {/* <Groceries /> */}
          {/* <Apparel /> */}
          {/* <Photography /> */}
          {/* <Rooms /> */}
          {/* <Errands /> */}
          {/* <Community /> */}
          {/* <Housing /> */}
          {props.match.params.item === "makeup" && (
            <Makeup searchItem={props.match.params.item} />
          )}
          {props.match.params.item === "headphones" && (
            <Headphones searchItem={props.match.params.item} />
          )}
          {props.match.params.item === "all-categories" && <Movie />}
          {props.match.params.item === "fashion" && <Apparel />}
          {props.match.params.item === "photography" && <Photography />}
          {props.match.params.item === "rooms" && <Rooms />}
          {props.match.params.item === "errands" && <Errands />}
          {props.match.params.item === "community" && <Community />}
          {props.match.params.item === "housing" && <Housing />}
          {props.match.params.item === "tickets" && <Tickets />}
        </div>
      </div>
    </div>
  );
}

export default ItemSearchPage;
