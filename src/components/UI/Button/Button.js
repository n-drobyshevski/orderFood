import styles from './Button.module.css';

import React from 'react';

const Button = (props) => {
    // {with icon or not, size}\
    let classes = styles.button
    if (props.className) {
        const color = props.className.includes('filled') ? `${styles.filled}` : '';
        const type = props.className.includes('icon') ? ` ${styles.button} ${styles['icon-button']} ` : styles.button;
        const size = props.className.includes('large') ? styles.large
            : props.className.includes('small') ? styles.small : '';

        classes = `${type} ${size} ${color}`
    };

    return (
        <button
            type={props.type || 'button'}
            className={classes}
            onClick={props.onClick}
        // disabled={props.disabled}
        >
            {props.children}
        </button>
    )
};

export default Button;