import axios from 'axios';
import * as actionTypes from '../../../constants/ActionTypes';

const fetchPostsStart = () => {
  return {
    type: actionTypes.FETCH_POSTS_START,
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsStart());

    try {
      const response = await axios('http://localhost:3001/posts');

      dispatch({
        type: actionTypes.FETCH_POSTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      // console.log(e);
    }
  };
};

export const addLike = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/likes', data);

      dispatch({
        type: actionTypes.ADD_LIKE,
        payload: response.data,
      });
    } catch (e) {
      // console.log(e);
    }
  };
};

export const removeLike = (postId, userId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/likes/${postId}`);

      console.log('removed');

      dispatch({
        type: actionTypes.REMOVE_LIKE,
        payload: {
          postId,
          userId,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };
};
