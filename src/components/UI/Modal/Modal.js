import styles from './Modal.module.css';

import Button from '../Button/Button';

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';

const Backdrop = () => {
    return (<div className={styles.backdrop}></div>)
};

const Modal = (props) => {

    return (
        <React.Fragment>

            {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Card className={styles.modal}>
                    <header>
                        <h3>
                            {props.title}
                        </h3>
                    </header>
                    <main>
                        {props.children}
                    </main>
                    <footer>
                        <Button>Order</Button>
                        <Button onClick={props.onClose}>Close</Button>
                    </footer>
                </Card>,
                document.getElementById('overlay-root'))}

        </React.Fragment>
    )
};

export default Modal;