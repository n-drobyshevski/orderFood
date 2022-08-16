import Button from '../UI/Button/Button';
import styles from './AddToCartForm.module.css';

import { useState } from 'react';

const AddToCartForm = (props) => {
    const [amount, setAmount] = useState('');

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(amount);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={styles.inputGroup}>
                <label htmlFor='amount'>Amount</label>
                <input onChange={amountChangeHandler} id='amount' type='number' min={1} max={99}></input>
            </div>
            <Button type='submit'>Add to cart</Button>
        </form>
    )
};

export default AddToCartForm;