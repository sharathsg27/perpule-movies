import React, {Component} from 'react';
import {connect} from "react-redux";
import {setPagination} from '../../../actions/PaginationAction'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import './Pagination.scss';

class Pagination extends Component {

    changePage = (e, type) => {
        e.preventDefault();
        let currentPage = this.props.options.currentPage;
        let lastPage = this.props.options.totalPages;
        if (currentPage > 1 && type === 'previous') {
            this.props.setPagination({
                ...this.props.options,
                currentPage: currentPage - 1
            })
        } else if ((currentPage >= 1 && currentPage < lastPage) && type === 'next') {
            this.props.setPagination({
                ...this.props.options,
                currentPage: currentPage + 1
            })
        }

    };

    render() {
        const page = this.props.options ? this.props.options : null;
        return (
            <div>
                <div className='action-buttons'>
                    <a className='btn-circle tooltip' title="Previous" href={''} onClick={(e) => {
                        this.changePage(e, 'previous')
                    }}>
                        <FontAwesomeIcon icon={faChevronLeft} className="action-icon"/>
                    </a>
                    <span className="page-number">{page ? page.currentPage : ''}</span>
                    <a className='btn-circle tooltip' title="Next" href={''} onClick={(e) => {
                        this.changePage(e, 'next')
                    }}>
                        <FontAwesomeIcon icon={faChevronRight} className="action-icon"/>
                    </a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    options: state.pagination.options
});

export default connect(mapStateToProps, {setPagination})(Pagination);
