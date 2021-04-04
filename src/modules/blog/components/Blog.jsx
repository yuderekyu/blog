import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFetch } from '../../common/fetch';
import { PostList } from '.';
import { Error, Loading } from '../../common/components';
import './Blog.css';

const filterDataByCurrentUser = (data, currentUserId) => {
  if (!data || !data.length) {
    return {
      currentUserData: undefined,
      otherUserData: undefined,
    };
  }

  const currentUserData = [];
  const otherUserData = [];
  data.forEach(currObj => {
    const { userId } = currObj;
    if (userId === currentUserId) {
      currentUserData.push(currObj);
    } else {
      otherUserData.push(currObj);
    }
  });

  return {
    currentUserData,
    otherUserData,
  };
};

const propTypes = {
  /* url to fetch data from */
  endpoint: PropTypes.string.isRequired,
  /* the current user's id */
  userId: PropTypes.number.isRequired,
};

const Blog = ({
  endpoint,
  userId,
}) => {
  const {
    status,
    data,
    error
  } = useFetch(endpoint, 'posts');

  const {
    currentUserData,
    otherUserData,
  } = useMemo(() => filterDataByCurrentUser(data, userId), [data, userId]);

  if (status === 'loading') {
    return <Loading />;
  }

  if (status === 'error') {
    return <Error message={error.message} />;
  }

  return (
    <div className={'Blog'}>
      <PostList postData={currentUserData} title={`${userId}'s Posts`}></PostList>
      <PostList postData={otherUserData} title={'Other Posts'}></PostList>
    </div>
  );
};

Blog.propTypes = propTypes;
export default Blog;
export {
  filterDataByCurrentUser
};
