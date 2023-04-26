import React from 'react';
import './productView.css';

const ProductView = (props) => {
    return (
        <div className="container">
            <div className="product__wrapper">
                <div className="product__title_wrapper">
                    <span className="product__info_back" onClick={() => {}}>
                        Назад
                    </span>
                    <h3 className="product__title">Title</h3>
                    <div className="product__rating">
                        <span>Artikul</span>
                        <span>Rate</span>
                    </div>
                </div>
                <div className="product__img_wrapper">
                    <img
                        className="product__img"
                        src="https://react-learning.ru/image-compressed/2.jpg"
                        alt=""
                    />
                </div>
                <div className="product__description">
                    <span className="product__description_price">400p</span>
                </div>
                <div className="product__description">
                    <span className="product__description_title">Описание</span>
                    <span>Описание продукта ляляляля</span>
                </div>
            </div>
        </div>
    );
};

export default ProductView;
