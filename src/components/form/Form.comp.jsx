import React from 'react';
import './Form.styles.scss';

import Button from '../button/button.comp';

const Form = () => {
    return (
        <form action="submit" className="form">
            <div className="form__left">
                <div className="form__input">
                    <input type="text" className="form__input--name" />
                </div>
                <div className="form__input">
                    <input type="email" className="form__input--email" />
                </div>
            </div>
            <div className="form__right">
                <div className="form__input">
                    <input type="text" className="form__input--message" />
                </div>
                <Button className="submit" type="submit">Send Message</Button>
            </div>
        </form>
    )
}

export default Form
