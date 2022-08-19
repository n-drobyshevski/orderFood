import styles from './Modal.module.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../Card/Card';

const Backdrop = (props) => {
    return (<div onClick={props.onClose} className={styles.backdrop}></div>)
};

const Modal = (props) => {

    return (
        <React.Fragment>

            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(
                <Card className={`${styles.modal} ${props.className}`}>
                    {props.children}
                </Card>,
                document.getElementById('overlay-root'))}

        </React.Fragment>
    )
};

export default Modal;