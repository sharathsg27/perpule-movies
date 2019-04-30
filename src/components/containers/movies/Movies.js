import React, {Component} from 'react';
import './Movies.scss';
import {connect} from "react-redux";
import {fetchMovies} from "../../../actions/moviesAction";
import {setPagination} from "../../../actions/PaginationAction";


class Movies extends Component {
    componentWillMount() {
        this.props.fetchMovies();
    }

    render() {
        const paginationOptions = this.props.paginationOptions;

        // Pagination
        let displayMovies = [];
        let originalMovies = Array.from(this.props.movies);


        if (paginationOptions) {
            let startIndex = 0;
            let endIndex = paginationOptions.recordsPerPage * paginationOptions.currentPage;

            if (paginationOptions.currentPage === 1) {
                displayMovies = originalMovies.slice(0, endIndex);
            } else if (paginationOptions.currentPage === 2) {
                startIndex = paginationOptions.recordsPerPage;
                displayMovies = originalMovies.slice(startIndex, endIndex);
            } else if (paginationOptions.currentPage > 2) {
                startIndex = (paginationOptions.recordsPerPage * paginationOptions.currentPage) - paginationOptions.recordsPerPage;
                displayMovies = originalMovies.slice(startIndex, endIndex)
            }
        }


        const movies = displayMovies ? displayMovies.map(movie => (
            <div className={'card'} key={movie.imdbID}>
                <article>
                    <div className="card-image-container">
                        <img src={movie.Poster} className={'img-loaded'} alt={''}/>
                    </div>
                    <div className={'card-details'}>
                        <div className={'title'}>{movie.Title}</div>
                        <div className="sub-info">
                            {movie.Year}
                        </div>
                    </div>
                </article>
            </div>
        )) : 'No movies found';
        return (
            <div>
                {movies}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.items,
    paginationOptions: state.pagination.options
});

export default connect(mapStateToProps, {fetchMovies, setPagination})(Movies);
