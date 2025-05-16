import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/creators';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemove = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this card?');
    if (confirmDelete) {
      dispatch(removeCard(id));
    }
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
      <button
        onClick={handleRemove}
        className={styles.removeButton}
        aria-label="Remove card"
      >
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

export default Card;
