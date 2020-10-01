import { combineReducers, createStore } from 'redux';
import commentsReducer from './comments';
import newsReducer from './news';

const reducer = combineReducers({
  news: newsReducer,
  comments: commentsReducer,
})

const store = createStore(reducer);

export default store;