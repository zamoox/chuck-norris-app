import React, { Component } from 'react';
import './app.css';
import Jumbotron from '../jumbotron';
import ItemList from '../item-list';
import SideBar from '../side-bar';
import JokeBox from '../joke-box';

import { withService } from '../hoc';


import './app.css';

class App extends Component {    
    
    state = {
        jokesData: [],
        fetchOptions: {
            selectedCategory: '',
            label: ''
        }
    }

    componentDidMount () {
        this.fetchJoke();
    }

    fetchJoke = (...args) => {
        const { getCategories, getRandomJoke, getJokeByCategory, getJokeBySearch } = this.props.service;
        const { jokesData, fetchOptions: { selectedCategory, label } } = this.state;
        
        
        if (selectedCategory) {
            getJokeByCategory(selectedCategory)
            .then((data) => {
                if (data['id']) {
                    const newData = [data, ...jokesData]
                    this.setState({jokesData: newData});
                }
            });
        }
        else if (label) {
            getJokeBySearch(label)
            .then((data) => {
                if (data['id']) {
                    const newData = [data, ...jokesData]
                    this.setState({jokesData: newData});
                }
            });
        }
        else {
            getRandomJoke(...args)
            .then((data) => {
                if (data['id']) {
                    const newData = [data, ...jokesData]
                    this.setState({jokesData: newData});
                }
            });
        }
    }

    onFlagChange = (id) => {
        const { jokesData } = this.state;
        const item = jokesData.find(e => e.id === id);
        const indexJoke = jokesData.findIndex(e => e.id === id);
        const value = item.favorite;
        
        item.favorite = !value; 
        this.setState({
            jokesData: [
                ...jokesData.slice(0, indexJoke), 
                item,
                ...jokesData.slice(indexJoke + 1), 
              ]
        })
    }

    onOptionsAdded = ({ selectedCategory, label }) => {
        this.setState({ fetchOptions: { selectedCategory, label } })    
    }

    render () {
        const { jokesData } = this.state;
        console.log(jokesData);

        const items = jokesData.map((el, index) => {
            return <JokeBox jokeData={el} />
        });

        return (
            <div className="layout">

                <div>
                    <Jumbotron onJokesAdded={this.updateData} onOptionsAdded={this.onOptionsAdded}/>
                    
                    <div>
                        <button
                        className="get-button" 
                        onClick={this.fetchJoke}>
                            Get a joke
                        </button>
                    </div>

                    <div className='item-list'>
                        <ItemList 
                        dataList={jokesData} 
                        renderItem={(item) => <JokeBox jokeData={item} onFlagChange={this.onFlagChange} /> } 
                        />
                    </div>
                </div>

                <SideBar 
                data={jokesData} 
                onFlagChange={this.onFlagChange}/> 
            </div>
        );
    }
}

export default withService()(App);