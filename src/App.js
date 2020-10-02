import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api/apiNews';
import { NewsPage } from './components/NewsPage/newsPage';
import { Container, Segment } from 'semantic-ui-react';
import { setNewsAction } from './redux/news';
import { Users } from './components/Users/Users';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getNews()
      .then(newsFromServer => {
        if(JSON.parse(localStorage.getItem('news'))) {
          dispatch(setNewsAction(JSON.parse(localStorage.getItem('news'))));
        } else {
          dispatch(setNewsAction(newsFromServer));
        }
      })
  }, [dispatch])

  return (
    <Container>
      <Segment>
        <Users />
      </Segment>
      <Segment>
        <NewsPage />
      </Segment>
    </Container>
  );
}

export default App;
