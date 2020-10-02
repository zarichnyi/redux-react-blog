const initialState = []

 const SET_NEWS = 'setNews';
 const FILTER_NEWS = 'filterNews';

export const filterNewsAction = (id) => ({
  type: FILTER_NEWS,
  id,
})

export const setNewsAction = (news) => ({
  type: SET_NEWS,
  news,
})

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return [...action.news];

    case FILTER_NEWS:
      return (action.id && JSON.parse(localStorage.getItem('news')).filter(item => item.userId === action.id))
      || JSON.parse(localStorage.getItem('news'))


    default:
      return state;
  }
}

export default newsReducer;