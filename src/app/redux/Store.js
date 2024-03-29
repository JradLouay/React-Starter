import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from "remote-redux-devtools";

const initialState = {};
const middlewares = [thunk];
// let devtools = x => x;

// if (
//   process.env.NODE_ENV !== "production" &&
//   process.browser &&
//   window.__REDUX_DEVTOOLS_EXTENSION__
// ) {
//   devtools = composeWithDevTools();
// }

export const Store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);
