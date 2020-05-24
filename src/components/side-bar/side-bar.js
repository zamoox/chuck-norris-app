import React, { Component } from 'react';

import './side-bar.css';

class SideBar extends Component {

    state = {
        genres: ["fantasy", "science fiction", "novel", "legend", "criminal"],
    }

    wrapperRef = React.createRef();

    onToggle = () => {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open');
    }

    render () {                    

        const { onGenreClick } = this.props;
        const { genres } = this.state;

        return (
            <div ref={this.wrapperRef} className="wrapper">
                <div className="side-bar">
                        <div className="side-bar-content">
                            <span className="head">Genres</span>
                            <ul className="head-list">
                            </ul>
                        </div>
                        <i onClick={this.onToggle} className="toggler fas fa-hamburger"></i>
                </div>
            </div>
        );    
    }
}

export default SideBar;
    