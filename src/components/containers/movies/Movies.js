import React, {Component} from 'react';
import './Movies.scss';
import {connect} from "react-redux";
import {fetchMovies} from "../../../actions/moviesAction";
import {setPagination} from "../../../actions/PaginationAction";
import {paginationService} from "../../../utils/js/service";
import {faCaretRight, faFilm} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies();
    }

    render() {
        const paginationOptions = this.props.paginationOptions;
        const displayMovies = paginationService(paginationOptions, this.props.movies);

        return displayMovies ? <div className="movies-list"> {displayMovies.map(movie => (
                <div className={'card'} key={movie.imdbID}>
                    <article>
                        <div className="card-image-container">
                            <img src={movie.Poster} className={'img-loaded'} alt={''}/>
                        </div>
                        <div className={'card-details'}>
                            <div className={'title'}>
                                <FontAwesomeIcon icon={faFilm} className="film-icon"/>
                                <span className="film-name">{movie.Title}</span>
                            </div>
                            <div className="sub-info">
                                <FontAwesomeIcon icon={faCaretRight} className="year-icon"/>
                                <span className="film-year">{movie.Year}</span>
                            </div>
                        </div>
                    </article>
                </div>
            ))}
            </div> :
            <div className="no-movies">
                <FontAwesomeIcon icon={faFilm} className="loading-icon"/>
            </div>;
    }
}


const mapStateToProps = state => ({
    movies: state.movies.items,
    paginationOptions: state.pagination.options
});

export default connect(mapStateToProps, {fetchMovies, setPagination})(Movies);
