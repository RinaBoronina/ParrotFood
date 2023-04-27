import React from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import HeaderIcons from './HeaderIcons/HeaderIcons';
import { useLocation } from 'react-router-dom';

export const Header = (props) => {
    const setSearchQuery = (path) => {
        // console.log(path);
        props.setSearch(path);
    };

    const location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__logo">
                        <Logo />
                    </div>
                    {location.pathname === '/' ? (
                        <Search setSearch={setSearchQuery} />
                    ) : (
                        ''
                    )}
                    <HeaderIcons />
                </div>
            </div>
        </header>
    );
};
