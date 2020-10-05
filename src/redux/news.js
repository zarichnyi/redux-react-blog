const initialState = []

const SET_NEWS = 'setNews';
const FILTER_NEWS = 'filterNews';
const EDIT_TITLE = 'editTitle';
const EDIT_BODY = 'editBody';
const DELETE_ARTICLE = 'deleteArticle';
const ADD_ARTICLE = 'addArticle';



export const AddArticle = (title, body, userId, articleId) => ({
  type: ADD_ARTICLE,
  title,
  body,
  userId,
  articleId,
})

export const deleteArticle = (id) => ({
  type: DELETE_ARTICLE,
  id,
})


export const editTitle = (id, title) => ({
  type: EDIT_TITLE,
  id,
  title,
})

export const editBody = (id, body) => ({
  type: EDIT_BODY,
  id,
  body,
})

export const filterNewsAction = (id) => ({
  type: FILTER_NEWS,
  id,
})

export const setNewsAction = (news) => ({
  type: SET_NEWS,
  news,
})

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return [...action.news];

    case FILTER_NEWS:
      return (action.id && JSON.parse(localStorage.getItem('news'))
        .filter(item => item.userId === action.id))
        || JSON.parse(localStorage.getItem('news'))

    case EDIT_TITLE:
      const updateTitle = JSON.parse(localStorage.getItem('news')).map((item) => {
        if (item.id !== action.id) {
          return { ...item };
        }
        // eslint-disable-next-line no-sequences
        return item.title = action.title, item
      })
      localStorage.setItem('news', JSON.stringify(updateTitle));
      return updateTitle;

    case EDIT_BODY:
      const updateBody = JSON.parse(localStorage.getItem('news')).map((item) => {
        if (item.id !== action.id) {
          return { ...item };
        }
        // eslint-disable-next-line no-sequences
        return item.body = action.body, item
      })
      localStorage.setItem('news', JSON.stringify(updateBody));
      return updateBody;

    case DELETE_ARTICLE:
      const deleteArticleItem = JSON.parse(localStorage.getItem('news')).filter(item => item.id !== action.id);
      localStorage.setItem('news', JSON.stringify(deleteArticleItem));
      return deleteArticleItem;

    case ADD_ARTICLE:
      const addArticleItem = JSON.parse(localStorage.getItem('news'))
      addArticleItem.push({ userId: action.userId, id: action.articleId, title: action.title, body: action.body })
      localStorage.setItem('news', JSON.stringify(addArticleItem));
      return addArticleItem;


    default:
      return state;
  }
}

export default newsReducer;