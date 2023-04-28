import React from 'react';
import './favoritePage.css';
import GoBack from '../../components/GoBack/GoBack';
import { CardList } from '../../components/CardList/CardList';

const FavoritePage = ({ favorites, userId, changeLikeCard }) => {
    return (
        <div className="favorite__wrapper">
            <GoBack />
            <h2 className="favorite__title">Избранное</h2>
            <div></div>
            <CardList
                cards={favorites}
                changeLikeCard={changeLikeCard}
                userId={userId}
            />
        </div>
    );
};

export default FavoritePage;
