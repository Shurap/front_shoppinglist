import { combineReducers } from 'redux'
import user from './reducerUser'
import lists from './reducerLists'
import app from './reducerApp'

const reducers = combineReducers({
  user,
  lists,
  app
});

export default reducers;