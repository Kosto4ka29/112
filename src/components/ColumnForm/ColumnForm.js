import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import { addColumn } from '../../redux/creators.js';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() && icon.trim()) {
      dispatch(addColumn({ title, icon }));

      setTitle('');
      setIcon('');
    }
  };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                Title:
                <TextInput
  value={title}
  onChange={e => setTitle(e.target.value)}
/>
            </label>
            <label>
                Icon:
                <TextInput
  value={icon}
  onChange={e => setIcon(e.target.value)}
/>
            </label>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;