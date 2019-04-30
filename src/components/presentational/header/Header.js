import React from 'react';
import './Header.scss';
import Search from "../../containers/search/Search";

const Header = () =>
    <header className={'header'}>
        <div className="header-name">Perpule</div>
        <Search/>
    </header>;

export default Header;
