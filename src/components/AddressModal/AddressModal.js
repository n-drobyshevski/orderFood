import styles from './AddressModal.module.css';

import Modal from '../UI/Modal/Modal';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

import UserContext from '../../store/user-context';
import { useRef, useContext } from 'react';

const AddressModal = props => {
    const userCtx = useContext(UserContext);
    const userAddress = userCtx.address;

    const cityInputRef = useRef();
    const streetInputRef = useRef();
    const numberInputRef = useRef();
    const postalCodeInputRef = useRef();


    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log('form submit');
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
                        ref={cityInputRef}
                        input={{
                            type: "text",
                            name: 'city',
                            placeholder: 'city',
                        }}
                        label={'City'} id={'city'} />
                    <Input
                        ref={streetInputRef}
                        input={{
                            type: "text",
                            name: 'street',
                            placeholder: 'street'
                        }}
                        label={'Street'} id={'street'} />
                    <Input
                        ref={numberInputRef}
                        input={{
                            type: "number",
                            name: 'number',
                            placeholder: '01'
                        }}
                        label={'building number'} id={'number'} />
                    <Input
                        ref={postalCodeInputRef}
                        input={{
                            type: "number",
                            name: 'postal-code',
                            placeholder: '00000'
                        }}
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