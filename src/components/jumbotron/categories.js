import React, { useState, useEffect } from 'react';

import './jumbotron.css';

const Categories = ({categories = [], onCategoryClicked, disabled = false}) => {

    const [category, setCategory] = useState({id: "category"});
    const categoryId = disabled ? "category-disabled" : "category";
    
    // useEffect(() => {
    //     return () => {
    //         const initialValue = {id: "category"};
    //         setCategory(initialValue);
    //     }
    // }, [])


    const handleClick = ({target}) => {
        if (!disabled) {
            category.id = 'category';
            target.id='category-active';
            onCategoryClicked(target);
            setCategory(target);       
        }
    }

    return (
        <div className="categories-wrap">
            {
            categories.map((element, index) => {
                    return (
                        <span 
                        key={index} 
                        id={categoryId}
                        onClick={handleClick}> 
                            {element}
                        </span>
                    );
                })
            }                
        </div>
    );
}

export default Categories;

