import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchUserData } from '../store/actions/profile';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userId, userPosts, userName } = useSelector((state) =>
    id ? state.profile : state.user
  );

  console.log(userName);

  useEffect(() => {
    if (!id && userPosts.length) return;

    if (id) {
      dispatch(fetchUserData(id, true));
    } else {
      dispatch(fetchUserData(userId));
    }
  }, []);

  return <div>Hello World</div>;
};

export default ProfilePage;
