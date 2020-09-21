import { takeLatest, call, put, all } from "redux-saga/effects";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap
// } from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export async function* fetchFashionItems() {
  try {
    const baseURL = "https://zappos-realtime-data.p.rapidapi.com/category.php";
    const response = await fetch(`${baseURL}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "zappos-realtime-data.p.rapidapi.com",
        "x-rapidapi-key": "ebb8587995mshad6038ccf55c36dp16781bjsncafe61b7c13d",
      },
      // })
      //   .then(async (response) => {
      //     console.log("reeeesponse>>>", response);
      //     const data = await response.json();
      //     yield put(fetchCollectionsSuccess(data.categories));
      //   })
      //   .catch((err) => {
      //     yield put(fetchCollectionsFailure(err));
      //   });
    });
    const fashionItems = yield call(response);
    yield put(fetchCollectionsSuccess(fashionItems));
  } catch (e) {
    yield put(fetchCollectionsFailure(e));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchFashionItems);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
