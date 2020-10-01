const initialState = [];

const SET_COMMENTS = 'setComments';

export const setCommentsAction = (comments) => ({
  type: SET_COMMENTS,
  comments,
})

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMMENTS:
      return [...action.comments];

    default:
      return state;
  }
}

export default commentsReducer;