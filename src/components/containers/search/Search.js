import React, {Component} from 'react';
import './Search.scss';
import {connect} from "react-redux";
import {searchMovies} from "../../../actions/SearchAction";
import {debounce} from "../../../utils/utils";

class Search extends Component {

    constructor(props) {
        super(props);
        this.callDebounceSearch = debounce(this.props.searchMovies, 500);
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
            </div>
        );
    }
}

export default connect(null, {searchMovies})(Search)
