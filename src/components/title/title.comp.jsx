import React from 'react';

import './title.styles.scss'

export default function Title(props) {

    return (
        <h2 className='title'>{props.children}</h2>
    )

}