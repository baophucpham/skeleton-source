import React from 'react';
import PricingAndBookingStyle from './style';

const PricingAndBookingComponent = () => {
    return (
        <PricingAndBookingStyle>
            <div className="areaTitleQuote">
                <span className="titleQuote">
                    This quote is valid until 05/08/2025
                </span>
            </div>
            <div className="areaTitleQuote">
                <span className="quoteReferent">Quote Reference: 297458</span>
            </div>
            <div className="areaGroup">
                <div className="headerGroup">
                    <div className='fullNameGroup'>
                        <p className='firstNameGroup'>Group A</p>
                        <p className='lastNameGroup'>{' '}(price per person)</p>
                    </div>
                    <div>£199</div>
                </div>
            </div>
        </PricingAndBookingStyle>
    );
};

export default PricingAndBookingComponent;
