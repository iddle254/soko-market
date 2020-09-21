import React, { useEffect, useState } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";

function Makeup({ searchItem }) {
  const [initialItems, setInitialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMakeup = async () => {
    setLoading(true);
    // console.log(props.match.params.item);
    const baseURL = "https://makeup.p.rapidapi.com/products.json";
    //   const searchParam = {props.match.params.item};
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "makeup.p.rapidapi.com",
        "x-rapidapi-key": "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      },
    })
      .then(async (response) => {
        const data = await response.json();
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
            key={result.created_at}
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
                src={result.api_featured_image}
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
                  name: {result.name}
                </div>
                <div className="result__itemCost" style={{ fontSize: "12px" }}>
                  brand: {result.brand}
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

export default Makeup;
