import React, { createRef } from 'react';
import { Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { List, Segment, Grid, Sticky } from 'semantic-ui-react';
import { Article } from '../Article/Article';
import { useState } from 'react';
import { useEffect } from 'react';

export const NewsPage = () => {
  const [countViews, setCountViews] = useState('');
  const news = useSelector((state) => state.news);
  const contextRef = createRef();

  // useEffect(() => {
  //   const addCount = (articleId) => {
  //     if (Object.keys(countViews).includes(articleId)) {
  //       setCountViews(articleId = countViews[articleId] + 1)
  //     } else {
  //       setCountViews({ articleId: 1 })
  //     }
  //   }
  // }, [countViews])

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
                // onClick={addCount(article.id)}
              >
                <Segment>
                  <Grid columns='equal'>
                    <Grid.Column>
                      {article.title}
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