import { Comment } from 'semantic-ui-react';
import React, { useEffect } from 'react';
import * as api from '../../api/apiComments';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCommentsAction } from '../../redux/comments';

export const Comments = () => {
  const dispatch = useDispatch();
  const { articleID } = useParams();
  const comments = useSelector(state => (state.comments).filter(item => item.postId === +articleID));

  useEffect(() => {
    api.comments()
      .then(commentsFromServer => (
        dispatch(setCommentsAction(commentsFromServer))
      ))
  }, [dispatch])

  return (
    <Comment.Group>
      {comments.map(comments => (
        <Comment key={comments.id}>
          <Comment.Content>
            <Comment.Author as='a'>{comments.postId}</Comment.Author>
            <Comment.Text>{comments.body}</Comment.Text>
          </Comment.Content>
        </Comment>
      ))}

    </Comment.Group>
  )
}