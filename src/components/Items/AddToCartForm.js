import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import styles from './AddToCartForm.module.css';

import { useState, useRef } from 'react';

const AddToCartForm = (props) => {
    // const [amount, setAmount] = useState('');
    const amountInputRef = useRef();
    const formRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    // const amountChangeHandler = (event) => {
    //     setAmount(+event.target.value);
    // };
    const submitHandler = (event) => {
        console.log('form submit')
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ) {
            setAmountIsValid(false);
            return
        }
        props.onSubmit(enteredAmountNumber);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} onSubmit={submitHandler}>

            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    defaultValue: '1',
                    // onChange: { amountChangeHandler },
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: 1,
                    step: 1,
                    max: 10,
                }}>
            </Input>
            <Button type='submit'>Add to cart</Button>
            {!amountIsValid &&
                <p>please enter a valid amount (1-10)</p>}
        </form>
    )
};

export default AddToCartForm;