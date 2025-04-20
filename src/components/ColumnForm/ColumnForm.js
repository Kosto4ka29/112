import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import shortid from 'shortid';
import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ id: shortid(), title, icon });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                Title:
                <TextInput
  value={title}
  onChange={e => setTitle(e.target.value)}
  placeholder="Title"
/>
            </label>
            <label>
                Icon:
                <TextInput
  value={icon}
  onChange={e => setIcon(e.target.value)}
  placeholder="Title"
/>
            </label>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
