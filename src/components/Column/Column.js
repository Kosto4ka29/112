import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/selectors.js';
import { useMemo } from 'react';

const Column = (props) => {
  // Wybieramy tylko potrzebne dane – NIE cały state
  const cards = useSelector(state => state.cards);
  const searchString = useSelector(state => state.searchString);

  // ✅ Memoizacja przefiltrowanych kart
  const filteredCards = useMemo(() => {
    return getFilteredCards({ cards, searchString }, props.id);
  }, [cards, searchString, props.id]);

  return (
    <div className={styles.column}>
      <h3 className={styles.title}>
        <span className={`fa fa-${props.icon}`} /> {props.title}
      </h3>

      <ul className={styles.cards}>
        {filteredCards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      <CardForm columnId={props.id} />
    </div>
  );
};

export default Column;
