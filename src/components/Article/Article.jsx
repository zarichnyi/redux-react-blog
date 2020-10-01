import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import { Comments } from '../Comments/Comments';

export const Article = () => {
  const { articleID } = useParams();
  const article = useSelector(state => (state.news).find(item => item.id === +articleID));
  return (
    <>
      { article &&
        <Card>
          <Card.Content header={article.title} />
          <Card.Content description={article.body} />
          <Card.Description>
            <Comments/>
          </Card.Description>
        </Card>}
    </>
  )


}