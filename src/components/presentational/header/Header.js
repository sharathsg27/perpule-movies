import React from 'react';
import './Header.scss';
import Search from "../../containers/search/Search";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilm} from "@fortawesome/free-solid-svg-icons";

const Header = () =>
    <header className={'header'}>
        <div className="header-name">
            <FontAwesomeIcon icon={faFilm} className={'brand-icon'}/>Perpule
        </div>
        <Search/>
    </header>;

export default Header;
