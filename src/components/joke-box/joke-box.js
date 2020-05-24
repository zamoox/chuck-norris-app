import React, { useState } from 'react';
import { withService } from '../hoc';

import Categories from '../jumbotron/categories';
import './joke-box.css';

const JokeBox = ({joke}) => {

    const { id, value, hoursAgo, categories} = joke;

    return (
        <div className="wrap-box">
            <div className="joke-box">
                <span id="secondary-text">
                    ID: <a href="/">
                            {id}
                        </a>
                </span>
                <p>
                    {value}
                </p>
                <div className="bottom-line">
                    <div className="secondary-text-wrap">
                        <span id="secondary-text">
                            Last update: {hoursAgo} hours ago
                        </span>
                    </div>
                    <Categories categories={['animal', 'celebrity', 'dev', 'career']} disabled={true} />
                </div> 
            </div>
            <i className="message-icon far fa-comment-alt"></i>
            <i 
            className="heart-icon far fa-heart"
            onClick={()=>{}}>
            </i>
        </div>
    );
}

export default JokeBox;

