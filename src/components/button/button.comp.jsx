import React from 'react';
import './button.styles.scss';

const Button = (props) => {
    return (
        <button className="btn" type={props.type}>
            {props.children}
        </button>
    )
}

export default Button
