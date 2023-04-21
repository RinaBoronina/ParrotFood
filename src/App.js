import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { CardList } from './components/CardList/CardList';
import { api } from './utils/api';

function App() {
    const [hook, setHook] = useState('');
    const [card, setCards] = useState([]);
    const [search, setSearch] = useState(undefined);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (search === undefined) return;
        api.searchProducts(search).then((data) => setCards(data));
        // const filtered = data.filter((e) =>
        //     e.name.toLowerCase().includes(search.toLowerCase())
        // );
        // setCards(filtered);
    }, [search]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getProductList()]).then(
            ([userData, productData]) => {
                setUser(userData);
                setCards(productData.products);
            }
        );
        // api.getProductList().then((res) => setCards(res.products));
        // api.getUserInfo().then((data) => setUser(data));
    }, []);

    console.log({ user });

    return (
        <div className="App">
            <Header setSearch={setSearch}></Header>
            <main className="container">
                <CardList cards={card} />
            </main>
            <Footer />
        </div>
    );
}

export default App;

// const clicker = () => {
//     setHook((state) => (state = state + 1));
// };
// --------------------------------------------
// const searcher = () => {
//     if (search === undefined) return;
//     const filtered = data.filter((e) =>
//         e.name.toLowerCase().includes(search.toLowerCase())
//     );
//     setCards(filtered);
// };

// useEffect(searcher, [search]);
