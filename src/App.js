import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './api/apiNews';
import { NewsPage } from './components/NewsPage/newsPage';
import { Container, Grid } from 'semantic-ui-react';
import { setNewsAction } from './redux/news';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getAllNews()
    .then(newsFromServer => (
      dispatch(setNewsAction(newsFromServer))
    ))
  }, [dispatch])

  return (
    <Container>
        <Grid divided='vertically'>
          <NewsPage />
        </Grid>
    </Container>
  );
}

export default App;
