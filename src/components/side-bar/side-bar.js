import React, { Component } from 'react';

import './side-bar.css';
import ItemList from '../item-list';
import JokeBox from '../joke-box';

class SideBar extends Component {

    state = {
        favoriteList: [],
    }

    componentDidUpdate (prevProps) {
        if (this.props.data !== prevProps.data) {
            this.updateList()
        }
    }

    updateList = () => {
        const { data } = this.props;
        const filteredList = data.filter(e => e.favorite);
        this.setState({
            favoriteList: filteredList
        });
    }

    onToggle = () => {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open');
    }

    wrapperRef = React.createRef();

    render () {      
        
        const { data, onFlagChange } = this.props;
        const { favoriteList } = this.state;
        console.log(data);

        const items = favoriteList.map((e, index) => {
            return <JokeBox jokeData={e} />
        });
        
        return (
            <div ref={this.wrapperRef} className="wrapper">
                
                <div className="side-bar">
                    <span className="toggler" onClick={this.onToggle}>Favorite</span>
                    <div className="side-bar-content">  
                        <ItemList 
                        dataList={favoriteList} 
                        renderItem={(item) => <JokeBox jokeData={item} onFlagChange={onFlagChange} /> } />
                    </div>
                        
                </div>
                

            </div>
        );    
    }
}

export default SideBar;
    