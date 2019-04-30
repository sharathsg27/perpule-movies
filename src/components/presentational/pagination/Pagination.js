import React, {Component} from 'react';
import {connect} from "react-redux";
import {setPagination} from '../../../actions/PaginationAction'

class Pagination extends Component {

    changePage = (e, type) => {
        e.preventDefault();
        if (type === 'previous') {
            this.props.setPagination({
                ...this.props.options,
                currentPage: this.props.options.currentPage - 1
            })
        } else if (type === 'next') {
            this.props.setPagination({
                ...this.props.options,
                currentPage: this.props.options.currentPage + 1
            })
        }

    };

    render() {
        const page = this.props.options ? this.props.options : null;
        return (
            <div>
                <div className={'action-buttons'}>
                    <a className={'btn btn-circle'} href={''} onClick={(e) => {
                        this.changePage(e, 'previous')
                    }}>Previous</a>
                    {page ? page.currentPage : ''}
                    <a className={'btn btn-circle'} href={''} onClick={(e) => {
                        this.changePage(e, 'next')
                    }}>Next</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    options: state.pagination.options
});

export default connect(mapStateToProps, {setPagination})(Pagination);
