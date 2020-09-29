import React from 'react';
import './style.css';
import { MdArrowForward } from 'react-icons/md'
;
import art03 from '../../assets/images/art03.png';
import visaLogo from '../../assets/images/visa-logo.png';
import masterLogo from '../../assets/images/master-logo.png';
import paypalLogo from '../../assets/images/paypal-logo.png';

const Article = () => {
    return(
        <div className="article-container">
            <p className="article-title">Trade stocks, <br />
            <img src={art03} alt="art03" className="article-art"  />
            earn bonus shares. Enjoy.</p>

            <div className="description-div">
                <p className="article-description">Being in control of your funds is the same as owning life. We help you efficiently manage
                    your portfolio.
                </p>
                <p className="description-link"> 
                    <a href="#">
                        <MdArrowForward size="30" color="white"/>
                    </a>
                </p>
            </div>

            <hr />

            <div className="payment-methods-div">
                <img src={visaLogo} alt="Visa" className="flags-logo" />
                <img src={masterLogo} alt="Master" className="flags-logo" />
                <img src={paypalLogo} alt="Paypal" className="flags-logo" />
            </div>
        </div>
    )
};

export default Article;