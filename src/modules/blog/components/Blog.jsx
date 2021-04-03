import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { PostList } from '.';
import { Error, Loading } from '../../common/components';
import './Blog.css';

const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (response.status > 199 && response.status < 300) {
      return response.json();
    }

    const { status, statusText } = response;
    throw new Error(`status: ${status} statusText: ${statusText}`);
  } catch(err) {
    throw err;
  }
};

const filterDataByCurrentUser = (data, currentUserId) => {
  if (!data || !data.length) {
    return {
      currentUserData: '',
      otherUserData: '',
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
  } = useQuery('posts', () => getData(endpoint));

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
  getData,
  filterDataByCurrentUser
};
