import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

const Post = ({
  title = '',
  body = '',
  userId,
}) => (
  <article className={'Post'}>
    <h1>{title}</h1>
    <p>{body}</p>
    <footer>{`Author: ${userId}`}</footer>
  </article>
);

Post.propTypes = propTypes;
export default Post;
