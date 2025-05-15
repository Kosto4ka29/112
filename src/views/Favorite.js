import React from 'react';
import styles from '../components/PageTitle/PageTitle.module.scss';
import PageTitle from '../components/PageTitle/PageTitle.js'; 

const Favorite = () => {
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.content}>
        Lorem Ipsum. This is a simple favorite page in the app.
      </p>
    </div>
  );
};

export default Favorite;
