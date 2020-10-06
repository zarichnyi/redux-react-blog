import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { latestNews, filterNewsAction } from '../../redux/news';

export const LatestNews = () => {
  const dispatch = useDispatch();


  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => {
          dispatch(latestNews())
          dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
        }}
      >
        Last News
    </Button>
    </>
  )
}