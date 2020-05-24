import React, { useState, useEffect } from 'react';

import './jumbotron.css';

import { withService } from '../hoc';
import JokeBox from '../joke-box';
import Categories from './categories';
import Search from './search';

const Jumbotron = ({service, onHandleClick}) => {

    const [joke, setJoke] = useState('');
    const [checkView, setCheckView] = useState('');
    const [categories, setCategories] = useState([]);
    const [label, setLabel] = useState('');

    const { getCategories, getRandomJoke, getJokeByCategory, getJokeBySearch } = service;
    
    useEffect(() => {
        console.log('componentDidMount');
        fetchJoke();
        fetchCategories();
    }, []) 

    // const handleCheck = ({target: {checked, value}}) => {
    //     setCheckView({
    //         check: checked,
    //         value: value
        //     });
    const fetchCategories = () => {
        getCategories().then(data => setCategories(data.slice(0,8)));
    } 

    const fetchJoke = () => {
        getRandomJoke()
        .then((data) => {
            console.log(data);
            setJoke(data);
        });
    }

    
    return (
        <div className="jumbotron">
            <span id="logo">MSI 2020</span>
            <h1>Hey!</h1>
            <h2>Let’s try to find a joke for you:</h2>

            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="random"
                    onChange={(e) => setCheckView(e.target.value)}></input>
                    <span>Random</span>
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="categories"
                    onChange={(e) => setCheckView(e.target.value)}></input>
                    <span>From categories</span>
                </label>
            </div>

            {checkView === "categories" &&  <Categories categories={categories} />}

            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="search"
                    onChange={(e) => setCheckView(e.target.value)}></input>
                    <span>Search</span>
                </label>
            </div>

            {checkView === "search" &&  <Search handleChange={(label) => setLabel(label)}/>}

            

            <button onClick={fetchJoke}>
                Get a joke
            </button>
            <JokeBox joke={joke} />
        </div>        
    );
}

export default withService()(Jumbotron);

