import React, { useState } from "react";

function Tickets() {
  const [items, setItems] = useState([
    {
      itemName: "October fest",
      itemPrice: "Kshs 2,000",
      itemDescription: "BYOW",
      itemImg:
        "https://images.unsplash.com/photo-1510743006598-4845616e044f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Blood run",
      itemPrice: "Kshs 1,300",
      itemDescription: "Run to save a life",
      itemImg:
        "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Bazu live on stage",
      itemPrice: "Kshs 2,600",
      itemDescription: "BYOW",
      itemImg:
        "https://images.unsplash.com/photo-1521960965075-ba9c5e4dce2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
  ]);
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
      {items.map((result) => (
        <div
          key={result.itemName}
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
              src={result.itemImg}
              alt={result.itemName}
              style={{}}
            ></img>
          </div>

          <div style={{ backgroundColor: "off-white", bottom: 0, flex: 0.2 }}>
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
                {result.itemName}
              </div>
              <div className="result__itemCost" style={{ fontSize: "12px" }}>
                {result.itemPrice}
              </div>
            </div>
            <div
              className="result__itemCost"
              style={{ fontSize: "16px", bottom: 0, padding: "4px" }}
            >
              {result.itemDescription}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tickets;
