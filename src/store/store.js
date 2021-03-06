import { createStore } from "redux";
import rootReducer from "../reducers/reducers";

let mystore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default mystore;
