import React, { useEffect, useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../app/stores/redux/shop/shop.selectors";

import { requestApiItems } from "../../app/stores/redux/shop/shop.actions";
import LoadingComponent from "../../app/layout/LoadingComponent";
import "./restaurantList.styles.css";

function Men({
  FetchCollectionsStart,
  apiItems,
  loading,
  match,
  history,
}) {
  // const [initialItems, setInitialItems] = useState([]);
  // const [loading, setLoading] = useState(false);
console.log("apiItems>>", apiItems);
  useEffect(() => {
    console.log("apiItems>>", apiItems);
  }, [apiItems]);
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
        apiItems.nodes[3].nodes.map((result) => (
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
const mapDispatchToProps = (dispatch) => ({
  FetchCollectionsStart: () => dispatch(requestApiItems()),
});
// const mapStateToProps = createStructuredSelector({
//   allItems: selectCollectionsForPreview,
// });
const mapStateToProps = (state) => {
  return {
    apiItems: state.shop.collections,
    loading: state.shop.isFetching
  }
}
const MenPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Men);
export default MenPage;
