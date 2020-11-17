import { createStore } from "redux";
import { reducerTask } from "../Reducers/reducerTask";

export const store = createStore(
  reducerTask,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
