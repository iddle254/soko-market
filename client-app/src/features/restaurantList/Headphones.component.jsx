import React, { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import "./restaurantList.styles.css";

function Headphones({ searchItem }) {
  const [initialItems, setInitialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMakeup = async () => {
    setLoading(true);
    // console.log(props.match.params.item);
    // https://google-shopping.p.rapidapi.com/search?language=EN&keywords=headphone&country=KE
    const searchParam = "headphone";
    const baseURL = `https://google-shopping.p.rapidapi.com/search?language=EN&keywords=${searchParam}&country=KE`;
    //   const searchParam = {props.match.params.item};
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "google-shopping.p.rapidapi.com",
        "x-rapidapi-key": "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      },
    })
      .then(async (response) => {
        console.log("reeeesponse>>>", response);
        const data = await response.json();
        console.log("daaata", data);
        setInitialItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("initial<<<", initialItems);
  useEffect(() => {
    fetchMakeup();
  }, []);

  function truncate(str, n) {
    return str.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className="itemSearchPage__results"
      style={{
        flex: 0.8,
        flexWrap: "wrap",
        width: "100%",
        display: "flex ",
        justifyContent: "space-between",
      }}
    >
      {loading ? (
        <LoadingComponent />
      ) : (
        initialItems.map((result) => (
          <div
            key={result.icon}
            className="result__item"
            style={{
              maxWidth: "30%",
              height: "120px",
              flex: "1 1 auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              border: "1px solid off-white",
              backgroundColor: "white",
              borderRadius: "9px",
              overflow: "hidden",
              marginBottom: "15px",
              marginRight: "14px",
            }}
          >
            <h1
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                padding: "15px",
                // whiteSpace: "nowrap",
                // overflow: "hidden",
                // OTextOverflow: "ellipsis",
                // textOverflow: "ellipsis",
              }}
            >
              {console.log(truncate(result.title, 20))}
              {truncate(result.title, 25)}
            </h1>
          </div>
          //   key={result.icon}
          //   className="result__item"
          //   style={{
          //     maxWidth: "30%",
          //     height: "240px",
          //     flex: "1 1 auto",
          //     display: "flex",
          //     alignItems: "center",
          //     flexDirection: "column",
          //     justifyContent: "center",
          //     border: "1px solid off-white",
          //     backgroundColor: "white",
          //     borderRadius: "9px",
          //     overflow: "hidden",
          //     marginBottom: "15px",
          //   }}
          // >

          //   <div
          //     style={{
          //       flex: 0.8,
          //       overflow: "hidden",
          //     }}
          //   >
          //     <img
          //       className={result.icon}
          //       src={result.icon}
          //       alt={result.brand}
          //       style={{}}
          //     ></img>
          //   </div>

          //   <div
          //     style={{
          //       backgroundColor: "off-white",
          //       bottom: 0,
          //       flex: 0.2,
          //       flexWrap: "wrap",
          //       overflowY: "hidden",
          //     }}
          //   >
          //     <div
          //       className="result__itemHeader"
          //       style={{
          //         display: "flex",
          //         flexDirection: "row",
          //         alignItems: "center",
          //         justifyContent: "space-evenly",
          //         padding: "5px",
          //       }}
          //     >
          //       <div
          //         className="result__itemName"
          //         style={{ fontSize: "14px", bottom: 0 }}
          //       >
          //         name: {result.name}
          //       </div>
          //       <div className="result__itemCost" style={{ fontSize: "12px" }}>
          //         brand: {result.brand}
          //       </div>
          //     </div>
          //     <div
          //       className="result__itemCost"
          //       style={{
          //         fontSize: "12px",
          //         bottom: 0,
          //         padding: "4px",
          //       }}
          //     >
          //       {result.description}
          //     </div>
          //   </div>
          // </>
        ))
      )}
    </div>
  );
}

export default Headphones;
