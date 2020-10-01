const initialState = []

export const SET_NEWS = 'setNews';

export const setNewsAction = (news) => ({
  type: SET_NEWS,
  news,
})

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return [...action.news];

    default:
      return state;
  }
}

export default newsReducer;