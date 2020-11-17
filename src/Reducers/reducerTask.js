import { deleteTask } from "../Actions/actionTask";
import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  CHECK_TASK,
} from "../constants/actionTypes";

const initialState = {
  listItems: [],
};

export const reducerTask = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, listItems: [...state.listItems, action.payload] };

    case DELETE_TASK:
      return {
        ...state,
        listItems: state.listItems.filter((el) => el.id !== action.payload),
      };

    case CHECK_TASK:
      return {
        ...state,
        listItems: state.listItems.map((el) =>
          el.id === action.payload ? { ...el, isDone: !el.isDone } : el
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        listItems: state.listItems.map((el) =>
          el.id === action.payload.id
            ? { ...el, text: action.payload.text }
            : el
        ),
      };
    default:
      return state;
  }
};
