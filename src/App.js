import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardList } from './components/CardList/CardList';
import { api } from './utils/api';

function App() {
    const [card, setCards] = useState([]);
    const [search, setSearch] = useState(undefined);
    const [user, setUser] = useState({});

    const myCards = (card) => {
        return card.filter(
            (item) => item.author._id === '643fb8243291d790b3f3b309'
        );
    };

    useEffect(() => {
        if (search === undefined) return;
        api.searchProducts(search).then((data) => setCards(myCards(data)));
    }, [search]);

    useEffect(() => {
        api.getAllProducts().then((res) => setCards(myCards(res.products)));
        api.getUserInfo().then((data) => setUser(data));
    }, []);

    return (
        <div className="App">
            <Header setSearch={setSearch}></Header>
            <main>
                <div className="container">
                    <CardList cards={card} userId={user._id} />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
