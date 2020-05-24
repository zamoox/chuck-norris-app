import React, { useState } from 'react';

import './jumbotron.css';

const Categories = ({categories, disabled}) => {

    const [category, setCategory] = useState('');
    const categoryId = disabled ? "category-disabled" : "category";

    return (
        <div className="categories-wrap">
            {
            categories.map((element, index) => {
                    return (
                        <span 
                        key={index} 
                        id={categoryId}
                        onClick={(e) => setCategory(e.target.innerHTML)}> 
                            {element}
                        </span>
                    );
                })
            }                
        </div>
    );
}

export default Categories;

