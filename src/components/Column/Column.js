import styles from './Column.module.scss';
import Card from '../Card/Card.js';
import CardForm from '../CardForm/CardForm.js';

const Column = (props) => {
  return (
    <div className={styles.column}>
      <h3 className={styles.title}>
        <span className={`fa fa-${props.icon}`} /> {props.title}
      </h3>

      <ul className={styles.cards}>
        {props.cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>

      <CardForm action={props.addCard} columnId={props.id} />
    </div>
  );
};

export default Column;
