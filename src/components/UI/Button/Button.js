import styles from './Button.module.css';

import React from 'react';

const Button = (props) => {
    const fill = props.fill ? styles.fill : ''; // fill or outline
    const size = props.size ? styles[props.size] : '';  // large, small or regular if omitted
    const icon = props.icon ? styles[`icon-${props.icon}`] : ''; // before, after or without text
    const classes = `${styles.button} ${fill} ${size} ${icon}`
    return (
        <button
            type={props.type || 'button'}
            className={classes}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    )
};

export default Button;