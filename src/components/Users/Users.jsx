import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown } from 'semantic-ui-react';
import * as api from '../../api/apiUsers'
import { setUsersAction } from '../../redux/users';
import { filterNewsAction } from '../../redux/news';


export const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => (state.users).map(item => ({
    key: item.id,
    text: item.name,
    value: item.id,
  })));
  users.unshift({ key: 0, text: 'All', value: 0 });

  useEffect(() => {
    api.getUsers()
      .then(usersFromServer => (
        dispatch(setUsersAction(usersFromServer))
      ))
  }, [dispatch])

  return (
    <Menu compact>
      <Dropdown
        placeholder="All"
        selection options={users}
        onChange={(event, data) => dispatch(filterNewsAction(data.value))}
      />
    </Menu>
  )
}