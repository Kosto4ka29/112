import React from 'react';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../redux/selectors';
import Card from '../components/Card/Card';
import styles from '../components/Column/Column.module.scss'; // Reuse Column styles
import PageTitle from '../components/PageTitle/PageTitle';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      {favoriteCards.length === 0 ? (
        <p className={styles.empty}>No favorite cards yet.</p>
      ) : (
        <section className={styles.column}>
          <ul className={styles.cards}>
            {favoriteCards.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default Favorite;
