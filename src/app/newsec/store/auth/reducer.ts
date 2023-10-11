import * as actionTypes from './types'


export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.STORE_USER:
      return {...state, user: action.payload}  
    case actionTypes.STORE_MEMBERS:
      return {...state, members: action.payload}
    default: return state
  }
}