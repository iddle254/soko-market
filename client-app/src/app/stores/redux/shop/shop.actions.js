import ShopActionTypes from "./shop.types";
import { call, put } from "redux-saga/effects";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return async function (dispatch) {
    // const collectionRef = firestore.collection('collections');
    try {
      const baseURL =
        "https://zappos-realtime-data.p.rapidapi.com/category.php";
      const response = await fetch(`${baseURL}`, {
        method: "GET",
        headers: {
          "x-rapidapi-host": "zappos-realtime-data.p.rapidapi.com",
          "x-rapidapi-key":
            "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
        },
      });
      // const fashionItems = yield call(response);
      const data = response.json();
      console.log("tataaaa", data);
      dispatch(fetchCollectionsStart());
      dispatch(fetchCollectionsSuccess(data.categories));
      // console.log("dzataaaa",)data
    } catch (e) {
      // yield put(fetchCollectionsFailure(e))
      console.log(e);
    }

    // .then(async (response) => {
    //       console.log("reeeesponse>>>", response);
    //       dispatch(fetchCollectionsStart());
    //       const data = await response.json();
    //       yield put(fetchCollectionsSuccess(data.categories));
    //       dispatch(fetchCollectionsSuccess(response));
    //     })
    //     .catch((err) => {
    //       yield put(fetchCollectionsFailure(err));
    //     });
  };
};
