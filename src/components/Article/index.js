import React from 'react';
import { FontAwesome } from 'react-web-vector-icons';
import './style.css';

import art03 from '../../assets/images/art03.png';
import visaLogo from '../../assets/images/visa-logo.png';
import masterLogo from '../../assets/images/master-logo.png';
import paypalLogo from '../../assets/images/paypal-logo.png';

const Article = () => {
    return(
        <div className="article-container">
            <p className="article-title">Trade stocks, earn bonus shares. Enjoy.</p>

            <div className="description-div">
                <p className="article-description">Being in control of your funds is the same as owning life. We help you efficiently manage
                    your portfolio.
                </p>
                <p>
                    <a href="#" className="description-link">
                        <FontAwesome name="arrow-right" size={30} color="white" />
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