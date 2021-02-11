import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./reducers/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middlewares = [thunk];
let devtools = x => x;

if (
  process.env.NODE_ENV !== "production" &&
  process.browser &&
  window.__REDUX_DEVTOOLS_EXTENSION__
) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const Store = createStore(
  RootReducer,
  initialState,
  // devtools(applyMiddleware(...middlewares))
  applyMiddleware(...middlewares)
);