import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { latestNews, filterNewsAction } from '../../redux/news';

export const LatestNews = () => {
  const dispatch = useDispatch();
  const [lastNewsToogler, setLastNewsToogler] = useState(false)

  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => {
          dispatch(latestNews(lastNewsToogler));
          setLastNewsToogler(!lastNewsToogler);
          dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
        }}
      >
        { lastNewsToogler ? `Oldest News` : `Last News`}
    </Button>
    </>
  )
}