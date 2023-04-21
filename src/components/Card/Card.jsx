import React from 'react';
import './card.css';
import { ReactComponent as Like } from './img/Like.svg';

const Card = ({ product }) => {
    return (
        <div className="card">
            <div className="card__sticky card__sticky_type_top_left">
                {product.discount ? (
                    <span className="card__discount">-{product.discount}%</span>
                ) : (
                    ''
                )}
            </div>
            <div className="card__sticky card__sticky_type_top-right">
                <Like />
            </div>
            <a href="/" className="card__link">
                <img
                    className="card__image"
                    src={product.pictures}
                    alt="food"
                />
                <div className="card__desc">
                    <span className="card__price">{product.price} ₽</span>
                    <span className="card__weight">{product.wight}</span>
                    <p className="card__name">{product.name}</p>
                </div>
            </a>
            <button className="card__card btn btn_type_primary">
                В Корзину
            </button>
        </div>
    );
};

export default Card;
