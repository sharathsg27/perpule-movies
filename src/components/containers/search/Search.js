import React, {Component} from 'react';
import './Search.scss';
import {connect} from "react-redux";
import {searchMovies} from "../../../actions/SearchAction";
import {debounceservice} from "../../../utils/js/service";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class Search extends Component {

    constructor(props) {
        super(props);
        this.callDebounceSearch = debounceservice(this.props.searchMovies, 300);
    }

    getMovieByTitle = (e) => {
        let term = e.target.value;
        this.callDebounceSearch(term);
    };

    render() {
        return (
            <div className={'search-container'}>
                <input type={'text'}
                       placeholder={'Search'}
                       className={'search-box'}
                       onKeyUp={this.getMovieByTitle}
                />
                <div className="search-icon-container">
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                </div>
            </div>
        );
    }
}

export default connect(null, {searchMovies})(Search)
