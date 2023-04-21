import React from 'react';
import './cardList.css';
import Card from '../Card/Card';

export const CardList = ({ cards, userId }) => {
    return (
        <div className="cards">
            {cards.map((elem) => {
                return (
                    <Card
                        key={elem._id}
                        {...elem}
                        product={elem}
                        userId={userId}
                    />
                );
            })}
        </div>
    );
};
