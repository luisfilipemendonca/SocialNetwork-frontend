import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { MainContainer } from '../../style';
import {
  ProfileContainer,
  ProfileHeader,
  ProfilePicture,
  Username,
  UserInfo,
  UserFollowers,
  Followers,
  UserCta,
  UserPostsContainer,
  PostContainer,
} from './styled';

import Button from '../../components/Buttons';
import MyRoute from '../../components/MyRoute';
import SinglePostContainer from '../../containers/SinglePost';
import FormUpdate from '../../containers/Forms/FormUpdate';

import { fetchProfile } from '../../store/actions/Profile';

const Profile = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const user = useSelector((state) => state.profile.user);
  const userId = useSelector((state) => state.auth.userId);

  const isLoading = false;

  useEffect(() => {
    console.log('FETCHING USER');
    dispatch(fetchProfile(params.id));
  }, [params.id]);

  return (
    <>
      <MainContainer fullCenter>
        {isLoading || !user ? (
          'Loading'
        ) : (
          <ProfileContainer>
            <ProfileHeader>
              <UserInfo>
                <ProfilePicture>
                  {user.profilePicture ? (
                    <img src={user.profilePictureUrl} alt="User" />
                  ) : (
                    <FaUserCircle />
                  )}
                </ProfilePicture>
                <Username>{user.username}</Username>
              </UserInfo>
              <UserFollowers>
                <Followers>
                  <h3>Followers</h3>
                  <span>0</span>
                </Followers>
                <Followers>
                  <h3>Following</h3>
                  <span>0</span>
                </Followers>
              </UserFollowers>
              <UserCta>
                {userId === parseInt(params.id, 10) ? (
                  <>
                    <Button className="btn-primary">Create Post</Button>
                    <Link to={`${location.pathname}/update`}>
                      Update Account
                    </Link>
                    <Button className="btn-primary">Delete Account</Button>
                  </>
                ) : (
                  <Button className="btn-primary">Follow</Button>
                )}
              </UserCta>
            </ProfileHeader>
            <UserPostsContainer>
              {user.Posts.length <= 0 ? (
                <div>No posts to show</div>
              ) : (
                user.Posts.map((post) => (
                  <PostContainer
                    key={post.id}
                    to={`${location.pathname}/posts/${post.id}`}
                  >
                    <img src={post.PostPhotos[0].postPhotoUrl} alt="Post" />
                  </PostContainer>
                ))
              )}
            </UserPostsContainer>
          </ProfileContainer>
        )}
      </MainContainer>
      <MyRoute
        path="/profile/:id/posts/:postId"
        component={SinglePostContainer}
        isClosed
      />
      <MyRoute path="/profile/:id/update" component={FormUpdate} isClosed />
    </>
  );
};

export default Profile;
