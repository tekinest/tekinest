import { combineReducers } from 'redux'
import contact from './reducer'
import auth from '../newsec/store/auth/reducer'


export interface IAppState {}

export const rootReducer = combineReducers({
  contact,
  auth
})