import React, { useState } from 'react';

import './jumbotron.css';

const Search = ({handleChange}) => {

    const [ label, setLabel] = useState('');

    handleChange = ({target}) => {
        setLabel(target.value);
    }

    return (
        <input 
        className="search-input"  
        type="search" 
        placeholder="Free text search..."
        value={label} 
        onChange={handleChange}>
        </input>
    );
}

export default Search;

