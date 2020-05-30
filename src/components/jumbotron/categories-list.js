import React, { useState, useEffect } from 'react';

import './jumbotron.css';

const CategoriesList = ({ Allcategories, onOptionsAdded }) => {

    const initialState = {value: '', active: false};
    const [categories, setCategories] = useState(Allcategories);
    
    const onHandleClick = (e) => {
        let {id, innerHTML} = e.target;
        
        const item = Allcategories.find(e => e.value === innerHTML);
        const itemIndex = Allcategories.findIndex(e => e.value === innerHTML);
       
        const newItem = {
            value: item.value, active: true
        }

        const newCategories= [...Allcategories.slice(0, itemIndex), newItem, ...Allcategories.slice(itemIndex + 1)];
        setCategories(newCategories);
        onOptionsAdded({
            selectedCategory: item.value,
            label: ''
        })
    }

    const spanClass = 'category';

    return (
        <div className="categories-wrap">
            {
            categories.map((category, index) => {
                    return (
                        <span 
                        key={index} 
                        id={category.active ? "category-active" : "category"}
                        onClick={onHandleClick}> 
                            {category.value}
                        </span>
                    );
                })
            }                
        </div>
    );
}

export default CategoriesList;

