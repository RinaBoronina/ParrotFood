import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import HeaderIcons from './HeaderIcons/HeaderIcons';

export const Header = (props) => {
    const setSearchQuery = (path) => {
        // console.log(path);
        props.setSearch(path);
    };
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    <Search setSearch={setSearchQuery} />
                    <HeaderIcons />
                </div>
            </div>
        </header>
    );
};
