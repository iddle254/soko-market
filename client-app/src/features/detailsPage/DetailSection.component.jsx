import React, { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

function DetailSection(props) {
  const [initialItems, setInitialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("props", props);

  const fetchMakeup = async () => {
    setLoading(true);
    const baseURL = `https://ali-express1.p.rapidapi.com/productsByCategory/${props.params.match}?from=0`;
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "zappos-realtime-data.p.rapidapi.com",
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
              }}
            >
              {result.name}
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

export default DetailSection;
