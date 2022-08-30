import styles from './AddressModal.module.css';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import UserContext from '../../store/user-context';
import { useRef, useContext, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isFiveChar = value => value.trim().length === 5;

const AddressModal = props => {
    const userCtx = useContext(UserContext);
    const [formInputsValidity, setFormInputsValidity] = useState({
        houseNumber: true,
        street: true,
        city: true,
        postalCode: true,
    });

    const cityInputRef = useRef();
    const streetInputRef = useRef();
    const numberInputRef = useRef();
    const postalCodeInputRef = useRef();


    const formSubmitHandler = (event) => {
        event.preventDefault();

        const postalCodeInputValue = postalCodeInputRef.current.value;
        const cityInputValue = cityInputRef.current.value;
        const streetInputValue = streetInputRef.current.value;
        const houseNumberInputValue = numberInputRef.current.value;
        const cityInputIsValid = !isEmpty(cityInputValue);
        const streetInputIsValid = !isEmpty(streetInputValue);
        const postalCodeInputIsValid = isFiveChar(postalCodeInputValue);
        const houseNumberInputIsValid = !isEmpty(houseNumberInputValue);
        console.log(postalCodeInputIsValid);

        console.log('form submit');

        setFormInputsValidity({
            houseNumber: houseNumberInputIsValid,
            street: streetInputIsValid,
            city: cityInputIsValid,
            postalCode: postalCodeInputIsValid,
        });

        const formIsValid =
            cityInputIsValid &&
            streetInputIsValid &&
            houseNumberInputIsValid &&
            postalCodeInputIsValid;

        if (!formIsValid) { return };

        const updateAddress = {
            city: cityInputRef.current.value,
            street: streetInputRef.current.value,
            postalCode: postalCodeInputRef.current.value,
            houseNumber: numberInputRef.current.value,
        };

        userCtx.updateUser('address', updateAddress);
    };

    return (
        <Modal className={styles['address-modal']} onClose={props.onClose}>
            <header>
                <h2>Address</h2>
            </header>
            <main>
                <form onSubmit={formSubmitHandler}>
                    <Input
                        className={!formInputsValidity.city ? styles.invalid : ''}
                        ref={cityInputRef}
                        input={{
                            type: "text",
                            name: 'city',
                            placeholder: 'city',
                        }}
                        error={!formInputsValidity.city && 'must not be empty'}
                        label={'City'} id={'city'} />
                    <Input
                        className={!formInputsValidity.street ? styles.invalid : ''}
                        ref={streetInputRef}
                        input={{
                            type: "text",
                            name: 'street',
                            placeholder: 'street',
                        }}
                        error={!formInputsValidity.street && 'must not be empty'}
                        label={'Street'} id={'street'} />
                    <Input
                        className={!formInputsValidity.houseNumber ? styles.invalid : ''}
                        ref={numberInputRef}
                        input={{
                            type: "number",
                            name: 'number',
                            placeholder: '00',
                        }}
                        error={!formInputsValidity.houseNumber && 'must not be empty'}
                        label={'house number'} id={'number'} />
                    <Input
                        className={!formInputsValidity.postalCode ? styles.invalid : ''}
                        ref={postalCodeInputRef}
                        input={{
                            type: "number",
                            name: 'postal-code',
                            placeholder: '00000',
                        }}
                        error={!formInputsValidity.postalCode && 'postal code must be 5 digit'}
                        label={'postal code'} id={'postal-code'} />

                    <div className={styles['form-actions']}>
                        <Button onClick={props.onClose} type='button'>Cancel</Button>
                        <Button fill={true} type='submit'>Submit</Button>
                    </div>
                </form>

            </main>
        </Modal >
    )

};

export default AddressModal;