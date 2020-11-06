import { reducerTask } from "../Reducers/reducerTask";
import { createStore } from "redux";

const store = createStore(
  reducerTask,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
