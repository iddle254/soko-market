import React, { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.component";
import Header from "../header/Header.component";
import DetailSection from "./DetailSection.component";

function Details(props) {
  const [locationSearched, setLocationSearched] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <h1>This is the details section</h1>
    // <div
    //   className="itemSearchPage"
    //   style={{ display: "flex", flexDirection: "row" }}
    // >
    //   <Sidebar />
    //   <div
    //     style={{
    //       display: "flex",
    //       flex: 0.8,
    //       flexDirection: "column",
    //       marginLeft: "20px",
    //     }}
    //   >
    //     <div
    //       className="itemSearchPage__header"
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "space-evenly",
    //         flex: 0.2,
    //       }}
    //     >
    //       <Header searchItem={props.match.params.item} />
    //     </div>
    //     <DetailSection />
    //   </div>
    // </div>
  );
}

export default Details;
