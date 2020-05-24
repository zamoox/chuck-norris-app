import React, { useState } from 'react';
import { connect } from 'react-redux';
import { booksLoaded } from '../../actions'
import './search-panel.css';

const SearchPanel = ({ books, onSearch }) => {

    const [label, setLabel] = useState('');

    const onSearchChange = (e) => {
        const text = e.target.value;
        setLabel(text);
        onSearch(text);
        
    }

    return (
        <form className="form-inline my-2 my-lg-0">
            <input value={label} onChange={onSearchChange} className="form-control mr-sm-2" type="text" placeholder="Enter book or author"></input>
        </form>
        
    );
}

const mapStateToProps = ({ books }) => {
    return {
        books
    }
}

// const mapDispatchToProps = {
//     booksLoaded
// }

export default connect(mapStateToProps, booksLoaded)(SearchPanel);