import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";
import "./restaurantList.styles.css";

function Movie({ searchItem, match, history }) {
  const [initialItems, setInitialItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMakeup = async () => {
    setLoading(true);
    // console.log(props.match.params.item);
    const baseURL = "https://ali-express1.p.rapidapi.com/categories";
    //   const searchParam = {props.match.params.item};
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "ali-express1.p.rapidapi.com",
        "x-rapidapi-key": "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      },
    })
      .then(async (response) => {
        console.log("reeeesponse>>>", response);
        const data = await response.json();
        console.log("daaata", data.categories);
        setInitialItems(data.categories);
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
            onClick={() => history.push(`${match.url}/${result.id}`)}
            key={result.id}
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
        ))
      )}
    </div>
  );
}

export default withRouter(Movie);
