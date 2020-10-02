import React, { createRef } from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, Segment, Grid, Sticky } from 'semantic-ui-react';
import { Article } from '../Article/Article';

export const NewsPage = () => {
  const news = useSelector((state) => state.news);
  const contextRef = createRef();

  return (
    <div ref={contextRef}>
      <Grid columns={2}>
        <Grid.Column >
          <List link>
            {news.map(article => (
              <List.Item as={Link} to={`/news/${article.id}`} key={article.id}>
                <Segment>
                  <Grid columns='equal'>
                    <Grid.Column>
                      {article.title}
                    </Grid.Column>
                    {/* <Grid.Column>
                  <Button size="small">Click Here</Button>
                </Grid.Column> */}
                  </Grid>
                </Segment>
              </List.Item>
            ))}
          </List>
        </Grid.Column>
        <Grid.Column>
          <Sticky context={contextRef} pushing>
            <Route path="/news/:articleID" component={Article} />
          </Sticky>
        </Grid.Column>
      </Grid>
    </div>
  )
};