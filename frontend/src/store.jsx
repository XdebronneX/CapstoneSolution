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
import { cartReducer } from "./reducers/cartReducers";

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

  adminProduct: deprovisionProductReducer,

  cart: cartReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
