import React from 'react';
import StepComponentStyle from './style';
import icons from 'src/assets/icon';

const StepComponent = () => {
    return (
        <StepComponentStyle>
            <div className="groupWhyItem">
                <img alt="" className="iconWhy" src={icons.step01} />
                <div className="nextStepTitle">Any questions?</div>
                <div className="nextStepDiscription">
                    Call me at 020 7336 5340 or{' '}
                    <span className="link">request a callback.</span>
                </div>
            </div>
            <div className="groupWhyItem">
                <img alt="" className="iconWhy" src={icons.step02} />
                <div className="nextStepTitle">Ready to Book?</div>
                <div className="nextStepDiscription">
                    <span className="link">Pay your deposit here </span>
                    to secure this quote.
                </div>
            </div>
            <div className="groupWhyItem">
                <img alt="" className="iconWhy" src={icons.step03} />
                <div className="nextStepTitle">Need to amend this Quote?</div>
                <div className="nextStepDiscription">
                    <span className="link">Let me know what you need,</span>
                    {' '}and I'll start working on it for you.
                </div>
            </div>
            <div className="groupWhyItem">
                <img alt="" className="iconWhy" src={icons.finalStep} />
                <div className="nextStepTitle">
                    This quote is only valid for 48 hours.
                </div>
                <div className="nextStepDiscription">
                    Availability is limited, so act quickly to secure your trip!
                </div>
            </div>
        </StepComponentStyle>
    );
};

export default StepComponent;
