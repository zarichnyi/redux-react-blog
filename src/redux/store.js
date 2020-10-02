import { combineReducers, createStore } from 'redux';
import commentsReducer from './comments';
import newsReducer from './news';
import usersReducer from './users';

const reducer = combineReducers({
  news: newsReducer,
  comments: commentsReducer,
  users: usersReducer,
})

const store = createStore(reducer);

export default store;