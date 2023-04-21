import React from 'react';
import './card.css';
import { ReactComponent as Like } from './img/Like.svg';

const Card = ({ product }) => {
    return (
        <div className="card">
            <div className="card__sticky card__sticky_left">
                {product.discount ? (
                    <span className="card__discount">-{product.discount}%</span>
                ) : (
                    ''
                )}
            </div>
            <div className="card__sticky card__sticky_right">
                <Like className="card__svg" />
            </div>
            <a href="/" className="card__link">
                <div className="card__image_wrapper">
                    <img
                        className="card__image"
                        src={product.pictures}
                        alt="food"
                    />
                </div>
                <div className="card__description">
                    <span className="card__price">{product.price} ₽</span>
                    <span className="card__weight">{product.wight}</span>
                    <p className="card__text">{product.name}</p>
                </div>
            </a>
            <button className="card__btn btn_color">В Корзину</button>
        </div>
    );
};

export default Card;
