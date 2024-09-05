import React from 'react';
import PricingAndBookingStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBed,
    faFlag,
    faMap,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { dataGroupInfor } from 'src/const/enum';
import images from 'src/assets/image';

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
            {dataGroupInfor &&
                dataGroupInfor?.map((item, index) => {
                    return (
                        <div key={index} className="areaGroup">
                            <div className="headerGroup">
                                <div className="fullNameGroup">
                                    <div className="firstNameGroup">
                                        {item?.NameGroup}{' '}
                                    </div>
                                    <div className="lastNameGroup">
                                        {' '}
                                        (price per person)
                                    </div>
                                </div>
                                <div className="priceGroup">£{item?.price}</div>
                            </div>
                            <div className="bodyGroup">
                                <div className="contentInfor">
                                    <div className="iconOfGroup">
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div>{item?.inforPeople}</div>
                                </div>
                                <div className="contentInfor">
                                    <div className="iconOfGroup">
                                        <FontAwesomeIcon icon={faMap} />
                                    </div>
                                    <div>{item?.location}</div>
                                </div>
                                <div className="contentInfor">
                                    <div className="iconOfGroup">
                                        <FontAwesomeIcon icon={faBed} />{' '}
                                    </div>
                                    <div>{item?.sleep}</div>
                                </div>
                                <div className="contentInfor">
                                    <div className="iconOfGroup">
                                        <FontAwesomeIcon icon={faFlag} />
                                    </div>
                                    <div>{item?.gofl1}</div>
                                </div>
                                <div className="contentInfor">
                                    <div className="iconOfGroup">
                                        <FontAwesomeIcon icon={faFlag} />
                                    </div>
                                    <div>{item?.gofl2}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            <div className="areaEnd">
                <div className="viewTotalPrice">
                    <div className="contentTotalPrice">Total price</div>
                    <div className="priceTotal">£1,494</div>
                </div>
                <div className="viewTotalPrice">
                    <div className="contentTotalDeposit">Total Deposit</div>
                    <div className="priceDeposit">£1,494</div>
                </div>
                <div className="areaChoosen">
                    <div className="titleAreaChoosen">Ready to book?</div>
                    <div className="contentAreaChoosen">
                        {`I hope I have everything right for you on this
                        quotation, but if there is anything you would like to
                        change let me know. As discussed I’ve added in the free
                        polo shirt.  When you are ready to book, we can secure
                        your reservation with a deposit of £200.00, the balance
                        is due on 16/07/2025. I will schedule a call to answer
                        any immediate questions you may have and look forward to
                        speaking to you soon.`}
                    </div>
                    <div className="btnEnd">
                        Click here to pay your £200 deposit and secure your
                        holiday
                    </div>
                </div>
                <div className='areaLogo'>
                    <img
                        alt=""
                        className="imageGoftLogo"
                        src={images.awardGoflLogo}
                    />
                </div>
            </div>
        </PricingAndBookingStyle>
    );
};

export default PricingAndBookingComponent;
