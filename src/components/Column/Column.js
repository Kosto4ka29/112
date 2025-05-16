import styles from './Column.module.scss';
import React from 'react';

import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/selectors.js';

const Column = (props) => {
  const cards = useSelector(state => getFilteredCards(state, props.id));

  return (
    <div className={styles.column}>
      <h3 className={styles.title}>
        <span className={`fa fa-${props.icon}`} /> {props.title}
      </h3>

      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>

      <CardForm columnId={props.id} />
    </div>
  );
};

export default Column;
