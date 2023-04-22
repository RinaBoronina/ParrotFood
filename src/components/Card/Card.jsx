import React from 'react';
import './card.css';
import { ReactComponent as Like } from './img/Like.svg';
import { editLike } from '../../utils/api';

const Card = ({ product, userId }) => {
    const cardLiked = product.likes.some((item) => item === userId);

    const changeLike = async () => {
        // return !cardLiked
        //     ? api.addLike(product._id)
        //     : api.removeLike(product._id);
        return await editLike(product._id, cardLiked);
    };

    return (
        <div className="card">
            <div className="card__sticky card__sticky_left">
                {product.discount ? (
                    <span className="card__discount">-{product.discount}%</span>
                ) : (
                    ''
                )}
                {product.tags.map((item) => (
                    <span className={`tag tag_type_${item}`}>{item}</span>
                ))}
            </div>
            <div className="card__sticky card__sticky_right">
                <button
                    onClick={changeLike}
                    className={`btn__like ${
                        cardLiked ? 'card__like_active' : 'card__like'
                    }`}
                >
                    <Like />
                </button>
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
