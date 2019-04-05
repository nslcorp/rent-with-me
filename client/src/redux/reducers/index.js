import { combineReducers } from "redux";
// import * as actionTypes from "../actions/types";

const initialUserState = {
  user: null,
  loading: true
}

const userReducer = (state = initialUserState, action) => {
  const type = action.type;

  switch (type) {
    default: return state

  }
}


export default combineReducers({
  user: userReducer,
});