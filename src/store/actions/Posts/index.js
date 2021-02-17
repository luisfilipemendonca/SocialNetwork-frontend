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
      console.log(e);
    }
  };
};
