import React from 'react';
import './style.css';

import Header from '../../components/Header';
import Article from '../../components/Article';

import art from '../../assets/images/art.png';
import art2 from '../../assets/images/art02.png';

const Main = () => {
    return(
        <div className="main-container">

            <div className="header">
                <Header />
            </div>

            <div className="art-left-div">
                <img src={art} alt="Art" className="art-image" />
            </div>

            <div className="article">
                <Article />
            </div>

            <div className="art-right-div">
                <img src={art2} alt="Art2" className="art2-image" />
            </div>

        </div>
    )
};

export default Main;