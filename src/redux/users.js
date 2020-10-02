const initialState = []

const SET_USERS = 'setUsers';

export const setUsersAction = (users) => ({
  type: SET_USERS,
  users,
})

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.users];

    default:
      return state;
  }
}

export default usersReducer;