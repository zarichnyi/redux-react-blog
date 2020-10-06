import React, { createRef } from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { List, Segment, Grid, Sticky } from 'semantic-ui-react';
import { Article } from '../Article/Article';
import { setViews } from '../../redux/news';

export const NewsPage = () => {
  const news = useSelector((state) => state.news);
  const contextRef = createRef();
  const dispatch = useDispatch();

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
                onClick={() => dispatch(setViews(article.id))}
              >
                <Segment>
                  <Grid columns='equal'>
                    <Grid.Column style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>
                      {article.title}
                      </span>
                      <span style={{ color: 'blue' }}>
                        Views:
                      {article.views}
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