import { combineReducers } from 'redux'
import userReducer from './user'
import formCommentReducer from './formComment'

export default combineReducers({
  user: userReducer,
  comment: formCommentReducer
})