import React from 'react';
import './works-item.styles.scss';
import Button from '../../button/button.comp';
import { Link } from 'react-router-dom';

export default function WorksItem({ id, img, title, icons, description, links }) {
    return (

        <div className="works-item" key={id}>
            <Link to={id.toString()} key={id}>
                <div className="works-item__img-container">
                    <div className="works-item__img" style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                    }} />
                </div>
            </Link>
            <p className="works-item__prg">
                {description}
            </p>
            <div className="works-item__info">
                <p className="works-item__info--title">{title}</p>
                <div className="works-item__info--icons">
                    {icons.map(icon => (
                        <img src={icon.img} alt='' />
                    ))}
                </div>

                <div className="works-item__info--links">
                    {
                        links.map(link => (
                            <a href={link.link} rel="noopener" target="_blank">
                                <Button><img src={link.icon} alt={link.icon} className="works-item__info--btn-icon" />{link.text}</Button>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}