import React, { useState } from 'react';
import styles from './ListForm.module.scss';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addList } from '../../redux/creators';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      dispatch(addList({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <label>
        Title:
        <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Description:
        <TextInput value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
