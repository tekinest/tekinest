import * as actionTypes from "./types";


export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_MESSAGE:
      return {...state, userData: action.payload}
    case actionTypes.POST_HELP:
      return {...state, helpData: action.payload}
    default:
      return state
  }
}