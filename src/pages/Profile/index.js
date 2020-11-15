import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchProfile } from '../../store/actions/Profile';

const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const user = useSelector((state) => state.profile.user);

  console.log(user);

  useEffect(() => {
    dispatch(fetchProfile(params.id));
  }, []);

  return <div style={{ paddingTop: '150px' }}>Profile Page</div>;
};

export default Profile;
