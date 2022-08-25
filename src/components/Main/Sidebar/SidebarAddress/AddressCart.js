import styles from './AddressCart.module.css';

import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';

import { HiLocationMarker } from 'react-icons/hi';

const AddressCart = () => {
    return (
        <Card>
            <div className={styles['address-card']}>

                <h4 className={styles.title}>Your address </h4>

                <div className={styles['address']}>
                    <div>
                        <HiLocationMarker />
                        <p>Street name, 23</p>
                    </div>
                    <Button size='small' fill={true}>Change</Button>
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
export default AddressCart;