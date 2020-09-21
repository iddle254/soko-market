import React, { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

function Housing({ searchItem }) {
  const [initialItems, setInitialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMakeup = async () => {
    setLoading(true);
    // console.log(props.match.params.item);
    const baseURL =
      "https://realtor.p.rapidapi.com/properties/v2/list-for-sale?sort=relevance&city=New%20York&limit=200&offset=0&state_code=NY";
    //   const searchParam = {props.match.params.item};
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "realtor.p.rapidapi.com",
        "x-rapidapi-key": "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      },
    })
      .then(async (response) => {
        console.log("reeeesponse>>>", response);
        const data = await response.json();
        console.log("daaata", data.properties);
        setInitialItems(data.properties);
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
            key={result.listing_id}
            className="result__item"
            style={{
              maxWidth: "30%",
              height: "240px",
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
            }}
          >
            <div
              style={{
                flex: 0.8,
                overflow: "hidden",
              }}
            >
              <img
                className="result__itemImage"
                src={result.thumbnail}
                alt={result.brand}
                style={{}}
              ></img>
            </div>

            <div
              style={{
                backgroundColor: "off-white",
                bottom: 0,
                flex: 0.2,
                flexWrap: "wrap",
                overflowY: "hidden",
              }}
            >
              <div
                className="result__itemHeader"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "5px",
                }}
              >
                <div
                  className="result__itemName"
                  style={{ fontSize: "14px", bottom: 0 }}
                >
                  name: {result.office.name}
                </div>
                <div className="result__itemCost" style={{ fontSize: "12px" }}>
                  price: Kshs{result.price * 100}
                </div>
              </div>
              <div
                className="result__itemCost"
                style={{
                  fontSize: "12px",
                  bottom: 0,
                  padding: "4px",
                }}
              >
                {result.description}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Housing;
