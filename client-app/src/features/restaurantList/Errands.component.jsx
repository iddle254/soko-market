import React, { useState } from "react";

function Errands() {
  const [items, setItems] = useState([
    {
      itemName: "Messenger",
      itemPrice: "Kshs ...",
      itemDescription: "Pangani",
      itemImg:
        "https://images.unsplash.com/photo-1558410177-183cf64cc773?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Laundry cleaner",
      itemPrice: "Kshs ...",
      itemDescription: "Kilimani",
      itemImg:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      itemName: "Estate manager ",
      itemPrice: "Kshs ...",
      itemDescription: "Eldoret",
      itemImg:
        "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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

export default Errands;
