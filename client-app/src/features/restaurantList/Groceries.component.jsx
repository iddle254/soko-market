import React, { useState } from "react";

function Groceries() {
  const [items, setItems] = useState([
    {
      itemName: "Potatoes",
      itemPrice: "Kshs ...",
      itemDescription: "...",
      itemImg:
        "https://images.unsplash.com/photo-1590165482129-1b8b27698780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Broccoli",
      itemPrice: "Kshs ...",
      itemDescription: "...",
      itemImg:
        "https://images.unsplash.com/photo-1506808547685-e2ba962ded60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Lettuce",
      itemPrice: "Kshs ...",
      itemDescription: "...",
      itemImg:
        "https://images.unsplash.com/photo-1549736624-81a2ca809ad7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
              flex: 0.5,
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

          <div style={{ backgroundColor: "off-white", bottom: 0, flex: 0.5 }}>
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

export default Groceries;
