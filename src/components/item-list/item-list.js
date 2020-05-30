import React, { useState, Children } from 'react';
import './item-list.css';

const ItemList = ({ dataList, renderItem }) => {
    
    const items = dataList.map((itemProp, index) => {
        return renderItem(itemProp)
    });

    return (
        <div className="items-wrap">
            {items}
        </div>
    );
}

export default ItemList;

