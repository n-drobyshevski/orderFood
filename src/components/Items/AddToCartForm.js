import Button from '../UI/Button/Button';
import styles from './AddToCartForm.module.css';

const AddToCartForm = () => {
    return (
        <form >
            <div className={styles.inputGroup}>
                <label htmlFor='amount'>Amount</label>
                <input id='amount' type='number' min={1} max={99}></input>
            </div>
            <Button type='submit'>Add to cart</Button>
        </form>
    )
};

export default AddToCartForm;