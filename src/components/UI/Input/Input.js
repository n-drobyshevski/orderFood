import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    const classes = `${styles.input} ${props.withIcon && styles['input-with-icon']}`
    return (
        <div className={classes}>
            {props.label && <label htmlFor={props.id}>{props.label}</label>}
            <span className={styles.icon}>{props.children}</span>
            <input
                ref={ref}
                {...props.input}
            >
            </input>
        </div >
    );
});

export default Input;