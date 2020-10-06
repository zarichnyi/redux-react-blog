import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import * as api from './api/apiNews';
import { NewsPage } from './components/NewsPage/newsPage';
import { setNewsAction, filterNewsAction } from './redux/news';
import { Users } from './components/Users/Users';
import { AddUser } from './components/AddArticle/AddArticle';
import { PopularNews } from './components/PopularNews/PopularNews';
import { LatestNews } from './components/LatestNews/LatestNews';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getNews()
      .then(newsFromServer => {
        if (JSON.parse(localStorage.getItem('news'))) {
          dispatch(setNewsAction(JSON.parse(localStorage.getItem('news'))));
        } else {
          dispatch(setNewsAction(newsFromServer));
          localStorage.setItem('news', JSON.stringify(newsFromServer));
        }

        if (JSON.parse(localStorage.getItem('choosenUser'))) {
          dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))))
        }
      })
  }, [dispatch])


  return (
    <Container>
      <Segment>
        <Users />
        <AddUser />
        <PopularNews />
        <LatestNews />
      </Segment>
      <Segment>
        <NewsPage />
      </Segment>
    </Container>
  );
}

export default App;
