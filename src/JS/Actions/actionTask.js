import {
  ADD_TASK,
  CHECK_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "../Constants/actionTypes";

export const add_Task = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const delete_Task = (payload) => {
  return {
    type: DELETE_TASK,
    payload,
  };
};
export const check_Task = (payload) => {
  return {
    type: CHECK_TASK,
    payload,
  };
};
export const edit_Task = (payload) => {
  return {
    type: EDIT_TASK,
    payload,
  };
};
