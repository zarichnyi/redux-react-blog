import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { sortByPopularity } from '../../redux/news';

export const PopularNews = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => dispatch(sortByPopularity())}
      >
        Popular News
      </Button>
    </>
  )
}