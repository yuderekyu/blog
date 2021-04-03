import React from 'react';
import PropTypes from 'prop-types';

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
  <article>
    <h1>{title}</h1>
    <p>{body}</p>
    <footer>{userId}</footer>
  </article>
);

Post.propTypes = propTypes;
export default Post;
