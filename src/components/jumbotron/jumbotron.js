import React, { useState, useEffect } from 'react';

import './jumbotron.css';

import { withService } from '../hoc';
import JokeBox from '../joke-box';
import CategoriesList from './categories-list';
import Search from './search';
import { act } from 'react-dom/test-utils';
import ItemList from '../item-list';

const Jumbotron = ({data, service, onJokesAdded, onOptionsAdded}) => {

    const [ activeRadio, setActiveRadio ] = useState();
    const [checkView, setCheckView] = useState('');
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState([]);
    const [label, setLabel] = useState('');

    useEffect(() => {
        fetchCategories();
    }, [])


    const { getCategories, getRandomJoke, getJokeByCategory, getJokeBySearch } = service;

    const fetchCategories = () => {
        getCategories().then(data => setCategories(data.slice(0,4)));
    }

    const onChangeRadio = (e) => {

        switch (e.target.id) {
            
            case 'random':
                setActiveRadio('random')
            break;

            case 'categories':
                setActiveRadio('categories') 
            break;

            case 'search':
                setActiveRadio('search')
            break;
            
            default: 
                return 'random';
        }
    }

    const categoriesViewData = [];

    categories.forEach((category) => {
        categoriesViewData.push(
            {
                value: category,
                active: false
            }
        )});

    console.log(categoriesViewData);

    const categoriesView = <CategoriesList Allcategories={categoriesViewData} onOptionsAdded={onOptionsAdded}/>;

    const searchView = <Search handleChange={(label) => onOptionsAdded({selectedCategory: '', label})}/>;

    return (
        <div className="jumbotron">
            <span id="logo">MSI 2020</span>
            <h1 onClick={(e) => console.log(e.target.value)}>Hey!</h1>
            <h2>Let’s try to find a joke for you:</h2>

            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="random"
                    onChange={onChangeRadio}></input>
                    <span>Random</span>
                </label>
            </div>
            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="categories"
                    onChange={onChangeRadio}></input>
                    <span>From categories</span>
                </label>
            </div>

            {activeRadio === "categories" &&  categoriesView }

            <div className="form-check">
                <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="optionsRadios" id="search"
                    onChange={onChangeRadio}></input>
                    <span>Search</span>
                </label>
            </div>

            {activeRadio === "search" &&  searchView}

        </div>        
    );
}

export default withService()(Jumbotron);

