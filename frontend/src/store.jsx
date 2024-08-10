import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";

import { composeWithDevTools } from "@redux-devtools/extension";
import {
  authReducer,
  updateProfileReducer,
  forgotPasswordReducer,
  allUsersReducer,
  deprovisionReducer,
  userDetailsReducer
} from "./reducers/userReducers";
import { allProductReducer, deprovisionProductReducer, newProductReducer, productDetailsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  authUser: authReducer,
  updateUser: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,

  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  userDeprovision: deprovisionReducer,

  newProduct: newProductReducer,
  allProducts: allProductReducer,
  productDetails: productDetailsReducer,

  adminProduct: deprovisionProductReducer

});

let initialState = {};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
