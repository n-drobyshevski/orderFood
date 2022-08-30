import styles from './AddressCard.module.css';

import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';

import { HiLocationMarker } from 'react-icons/hi';
import { useContext } from 'react';
import UserContext from '../../../../store/user-context';

const AddressCard = props => {
    const userCtx = useContext(UserContext);
    return (
        <Card>
            <div className={styles['address-card']}>

                <h4 className={styles.title}>Your address </h4>

                <div className={styles['address']}>
                    <div>
                        <HiLocationMarker />
                        <p>{userCtx.address.street}, {userCtx.address.houseNumber}</p>
                    </div>
                    <Button onClick={props.onChangeAddress} size='small' fill={true}>Change</Button>
                </div>

                <p className={styles.description}>Lorem ipsum dolor sit amet, consectitur</p>

                <div className={styles['button-group']}>
                    <Button size='small' fill={true}> Add details</Button>
                    <Button size='small'>Add notes</Button>
                </div>

            </div>
        </Card>
    )
};
export default AddressCard;