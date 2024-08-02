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
} from "./reducers/userReducers";

const reducer = combineReducers({
  authUser: authReducer,
  updateUser: updateProfileReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
