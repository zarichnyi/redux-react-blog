import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { latestNews } from '../../redux/news';

export const LatestNews = () => {
  const dispatch = useDispatch();


  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => dispatch(latestNews())}
      >
        Last News
    </Button>
    </>
  )
}