import React from 'react';
import { Button, Container, Form, Input, TextArea, Segment, Dropdown } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { AddArticle, filterNewsAction } from '../../redux/news';

export const AddUser = () => {
  const users = useSelector(state => (state.users).map(item => ({
    key: item.id,
    text: item.name,
    value: item.id,
  })));
  const [formVisibility, setFormVisibility] = useState(false)
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [choosenUser, setChoosenUser] = useState(1);
  const dispatch = useDispatch();

  const applyData = () => {
    dispatch(AddArticle(newTitle, newBody, choosenUser, +Date.now()))
    setFormVisibility(!formVisibility)
    setNewTitle('')
    setNewBody('')
    setChoosenUser(1)
  }

  return (
    <>
      <Button
        style={{ marginLeft: 40 }}
        onClick={() => setFormVisibility(!formVisibility)}
      >
        Add article
      </Button>
      { formVisibility &&
        <Container style={{ zIndex: 1, position: 'absolute', top: '20vh', left: '10vw', height: '500px', width: '800px', border: '1px solid black', backgroundColor: 'grey' }}>
          <Segment style={{ backgroundColor: "grey" }}>
            <Form
              onSubmit={(event => {
                event.preventDefault();
                applyData();
                dispatch(filterNewsAction(JSON.parse(localStorage.getItem('choosenUser'))));
              })}
            >
              <Input
                placeholder="Title"
                required
                style={{ margin: '20px 0', width: '100%' }}
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
              />
              <TextArea
                placeholder="Body"
                required
                value={newBody}
                onChange={(event) => setNewBody(event.target.value)}
              />
              <Dropdown
                name="users"
                selection options={users}
                defaultValue={1}
                onChange={(event, data) => setChoosenUser(data.value)}
                style={{ margin: '0 10px' }}
              />
              <Button type='submit' style={{ margin: '20px 0' }}>Submit</Button>
              <Button onClick={() => {
                setFormVisibility(!formVisibility)
                setNewTitle('')
                setNewBody('')
                setChoosenUser(1)
              }}
              style={{ margin: '0 10px' }}
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Container>
      }
    </>
  )
}
