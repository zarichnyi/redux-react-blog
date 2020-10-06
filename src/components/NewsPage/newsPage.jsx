import React, { createRef } from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List, Segment, Grid, Sticky, Statistic } from 'semantic-ui-react';
import { Article } from '../Article/Article';
import { setViews, filterNewsAction } from '../../redux/news';
import { useState } from 'react';

export const NewsPage = () => {
  const news = useSelector((state) => state.news);
  const contextRef = createRef();
  const dispatch = useDispatch();
  const [selectedArticle, setSelectedArticle] = useState('');

  const checkIfViewed = (articleID) => {
    if (selectedArticle !== articleID) {
      dispatch(setViews(articleID))
      dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
    }
    setSelectedArticle('')
  }

  return (
    <div ref={contextRef}>
      <Grid columns={2}>
        <Grid.Column >
          <List link>
            {news.map(article => (
              <List.Item
                as={Link}
                to={`/news/${article.id}`}
                key={article.id}
                onClick={() => {
                  checkIfViewed(article.id);
                  setSelectedArticle(article.id)
                }}
              >
                <Segment>
                  <Grid columns='equal'>
                    <Grid.Column style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>
                        {article.title}{article.id}
                      </span>
                      <span style={{ color: 'blue' }}>
                        <Statistic size='mini'>
                          <Statistic.Label>Views</Statistic.Label>
                          <Statistic.Value>{article.views}</Statistic.Value>
                        </Statistic>
                      </span>
                    </Grid.Column>
                  </Grid>
                </Segment>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
        <Grid.Column style={{ zIndex: 0 }}>
          <Sticky context={contextRef} pushing>
            <Route path="/news/:articleID" component={Article} />
          </Sticky>
        </Grid.Column>
      </Grid>
    </div>
  )
};