import React, { useState } from 'react';

import './jumbotron.css';

const Search = ({handleChange}) => {

    const [ label, setLabel ] = useState('');

    const handler = ({target: {value}}) => {
        handleChange(value)
        setLabel(value);
    }

    return (
        <input 
        className="search-input"  
        type="search" 
        placeholder="Free text search..."
        value={label} 
        onChange={handler}>
        </input>
    );
}

export default Search;

