import React from 'react';
import './footer.styles.scss';
import Title from '../title/title.comp';
import Form from '../form/Form.comp';

const Footer = () => {
    return (
        <footer className="footer">
            <Title>Let's connect</Title>
            <div className="footer__form container">
                <Form />
            </div>
        </footer>
    )
}

export default Footer
