import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, Button, Popup, Header, Form, TextArea } from 'semantic-ui-react';
import { Comments } from '../Comments/Comments';
import { editTitle, editBody, deleteArticle, filterNewsAction } from '../../redux/news';

export const Article = () => {
  const { articleID } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(state => (state.news).find(item => item.id === +articleID));
  const [editingTitle, setEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');

  const [editingBody, setEditingBody] = useState(false);
  const [editedBody, setEditedBody] = useState('');

  const deleteArticleItem = () => {
    dispatch(deleteArticle(article.id));
    dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
  }

  const handleEdit = (event) => {
    if (event.key === 'Enter' && editedTitle) {
      dispatch(editTitle(article.id, editedTitle));
      dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
      setEditingTitle(false);
      setEditedTitle('');
    } else if (event.key === 'Enter' && editedBody) {
      dispatch(editBody(article.id, editedBody));
      dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
      setEditingBody(false);
      setEditedBody('');
    }

    if (event.key === 'Escape') {
      setEditedTitle('');
      setEditingTitle(false);
    }
  };

  const handleSaveChanges = () => {
    if (editedTitle) {
      dispatch(editTitle(article.id, editedTitle));
      dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
      setEditingTitle(false);
      setEditedTitle('');
    } else {
      setEditingTitle(false);
      setEditedTitle('');
    }
  };

  return (
    <>
      { article &&
        <Card>
          <Card.Content>
            <Popup
              content='Edit title'
              trigger={
                <Button
                  size='mini'
                  icon="edit outline"
                  onClick={() => setEditingTitle(!editingTitle)}
                />
              }
            />
            <Popup
              content='Delete article'
              trigger={
                <Button
                  size='mini'
                  icon="delete"
                  onClick={deleteArticleItem}
                />
              }
            />
            {!editingTitle ?
              <Header as="h2" style={{ margin: 0 }} >
                {article.title}
              </Header>
              :
              <Form>
                <TextArea
                  defaultValue={article.title}
                  onChange={(event, data) => setEditedTitle(data.value)}
                  onKeyDown={handleEdit}
                  onBlur={handleSaveChanges}
                />
              </Form>
            }
          </Card.Content>
          <Card.Content>
            <Popup
              content='Edit body'
              trigger={
                <Button
                  size='mini'
                  icon="edit outline"
                  onClick={() => setEditingBody(!editingBody)}
                />
              }
            />
            {!editingBody ?
              <Card.Content description={article.body} />
              :
              <Form>
                <TextArea
                  defaultValue={article.body}
                  onChange={(event, data) => setEditedBody(data.value)}
                  onKeyDown={handleEdit}
                  onBlur={handleSaveChanges}
                />
              </Form>
            }
            <Card.Description>
              <Comments />
            </Card.Description>
          </Card.Content>
        </Card>}
    </>
  )
}
