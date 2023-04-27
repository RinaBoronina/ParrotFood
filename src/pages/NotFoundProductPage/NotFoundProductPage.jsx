import React from 'react';
import svg from '../NotFoundPage/svg.svg';
import './notFoundProductPage.css';
import { Link } from 'react-router-dom';

const NotFoundProductPage = (props) => {
    return (
        <>
            <div className="container">
                <div className="notFoundProductPage__wrapper">
                    <img
                        className="notFoundProductPage__img"
                        src={svg}
                        alt="sad smile"
                    />
                    <h2 className="notFoundProductPage__title">
                        Простите, товары по вашему запросу не найдены.
                    </h2>
                    <Link to="/">
                        <button className="notFoundProductPage__btn">
                            На главную
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundProductPage;
