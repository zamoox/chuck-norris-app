import React, { useState } from 'react';
import { withService } from '../hoc';

import CategoriesList from '../jumbotron/categories-list';
import './joke-box.css';

const JokeBox = ({ jokeData, onFlagChange }) => {

    const { id, joke, hoursAgo, category, favorite } = jokeData;

    const clazz = favorite ? 'fas' : 'far';

    const onHandleClick = () => {
        onFlagChange(id);
    }

    return (
        <div className="wrap-box">
            <div className="joke-box">
                <span id="secondary-text">
                    ID: <a href="/">
                            {id}
                        </a>
                </span>
                <p>
                    {joke}
                </p>

                <div className="bottom-line">
                    <div className="secondary-text-wrap">
                        <span id="secondary-text">
                            Last update: {hoursAgo} hours ago
                        </span>
                    </div>
                    <div className="categories-wrap">
                        <span id="category-disabled">{category}</span>
                    </div>
                </div>

            </div>
            <i className="message-icon far fa-comment-alt"></i>
            <i 
            className={'heart-icon fa-heart ' + clazz}
            onClick={onHandleClick}>
            </i>
            
        </div>
    );
}

export default JokeBox;

