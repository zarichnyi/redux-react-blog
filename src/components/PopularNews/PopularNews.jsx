import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { sortByPopularity, filterNewsAction } from '../../redux/news';

export const PopularNews = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => {
          dispatch(sortByPopularity())
          dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
        }}
      >
        Popular News
      </Button>
    </>
  )
}