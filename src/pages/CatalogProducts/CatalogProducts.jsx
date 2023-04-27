import React from 'react';
import { CardList } from '../../components/CardList/CardList';
import './catalogProduct.css';
import NotFoundProductPage from '../NotFoundProductPage/NotFoundProductPage';

const CatalogProducts = ({ cards, user, changeLikeCard, search }) => {
    return (
        <>
            {search ? (
                <p className="search__info">
                    По запросу {search} найдено {cards.length} товаров
                </p>
            ) : (
                ''
            )}
            {search && cards.length === 0 ? <NotFoundProductPage /> : ''}
            <CardList
                cards={cards}
                userId={user._id}
                changeLikeCard={changeLikeCard}
            />
        </>
    );
};

export default CatalogProducts;
