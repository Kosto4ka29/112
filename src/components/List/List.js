import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector, useDispatch } from 'react-redux';


const List = () => {
  const columns = useSelector(state => state.columns);
  const cards = useSelector(state => state.cards);
  const dispatch = useDispatch();

  // ✅ Funkcja dodająca kartę
  const handleAddCard = (title, columnId) => {
    dispatch({
      type: 'ADD_CARD',
      payload: { title, columnId },
    });
  };

  const columnsWithCards = columns.map(column => ({
    ...column,
    cards: cards.filter(card => card.columnId === column.id)
  }));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        {columnsWithCards.map(column =>
          <Column
            key={column.id}
            {...column}
            addCard={handleAddCard}  
          />
        )}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
