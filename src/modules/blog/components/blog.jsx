import React, { useState } from 'react';

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

const divideDataByCurrentUser = (data, currentUserId) => {
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

const Blog = ({
  endpoint,
  userId,
}) => {
  // fetch blog post data using react-query
  // use userId to divide blog post data
  getData(endpoint).then(data => {
    const {
      currentUserData,
      otherUserData,
    } = divideDataByCurrentUser(data, userId);
    console.log(currentUserData);
    console.log(otherUserData);
  });

  return (
    'test'
  );
}

export default Blog;
