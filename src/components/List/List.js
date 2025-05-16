import React from 'react';
import styles from './List.module.scss';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getColumnsByList, getListById } from '../../redux/selectors.js';
import { useParams } from 'react-router-dom';

const List = () => {
  const { listId } = useParams();
  


  const columns = useSelector(state => getColumnsByList(state, listId));
  const listData = useSelector(state => getListById(state, listId));

  if (!listData) return <p>Nie znaleziono listy.</p>;

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
          <span>{listData.subtitle}</span>
        </h2>
      </header>
      <p className={styles.description}>
        {listData.description}
      </p>
      <section className={styles.columns}>
        {columns.map(column =>
          <Column key={column.id} {...column} />
        )}
      </section>
      <ColumnForm listId = {listId} />
    </div>
  );
};

export default List;
