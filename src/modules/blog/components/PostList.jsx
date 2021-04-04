import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '.';
import './PostList.css';

const propTypes = {
  /* An array of objects containg blog post data. */
  postData: PropTypes.arrayOf(PropTypes.object).isRequired,
  /* The title to give to the group of posts. */
  title: PropTypes.string.isRequired,
};

const PostList = ({
  postData = [],
  title = '',
}) => {
  const buildPosts = () => {
    return postData.map(post => (
      <Post
        title={post.title}
        body={post.body}
        userId={post.userId}
        key={post.id}
      />
    ));
  };

  return (
    <article className={'PostList'}>
      <h1>{title}</h1>
      {buildPosts()}
    </article>
  );
};

PostList.propTypes = propTypes;
export default PostList;
