import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

const Column = (props) => {
  const allCards = useSelector(state => state.cards);

  const cards = useMemo(() => {
    return allCards.filter(card => card.columnId === props.id);
  }, [allCards, props.id]);

  return (
    <div className={styles.column}>
      <h3 className={styles.title}>
        <span className={`fa fa-${props.icon}`} /> {props.title}
      </h3>

      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      <CardForm columnId={props.id} />

    </div>
  );
};

export default Column;
