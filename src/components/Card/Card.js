import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/creators';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={handleToggle}
        className={clsx(styles.favoriteButton, isFavorite && styles.active)}
        aria-label="Toggle favorite"
      >
        <i className="fa fa-star-o" />
      </button>
    </li>
  );
};

export default Card;
