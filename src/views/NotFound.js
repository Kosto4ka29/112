import React from 'react';
 import PageTitle from '../components/PageTitle/PageTitle.js';

const NotFound = () => {
  return (
    <div>
      <PageTitle>404 Not Found</PageTitle>
      <p style={{ textAlign: 'center', color: 'white' }}>
        Sorry, this page doesn't exist.
      </p>
    </div>
  );
};

export default NotFound;
