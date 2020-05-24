import React, { useState } from 'react';
import './app.css';
import SideBar from '../side-bar';
import Jumbotron from '../jumbotron';
import JokeBox from '../joke-box';


import './app.css';

const App = () => {           

    return (
        <div className="layout">
            <Jumbotron />
            <SideBar />
        </div>
    );
}

export default App;