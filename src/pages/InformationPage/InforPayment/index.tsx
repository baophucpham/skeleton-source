import React from 'react';
import InformationPaymentStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faDownload, faPhoneFlip, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import icons from 'src/asset/icon';

const InforPaymentCompoment = () => {
    const arrGroup = [
        { id: 1, nameGroup: 'Group A (price per person)', price: '£199' },
        { id: 2, nameGroup: 'Group B (price per person)', price: '£199' },
        { id: 3, nameGroup: 'Group C (price per person)', price: '£199' },
    ];

    return (
        <InformationPaymentStyle>
            <div className="inforSeller">
                <div className="viewinforSeller">
                    <div className="contentSeller">
                        <div>
                            “I’m Oliver and I’ll be looking after your trip.”
                        </div>
                        <br />
                        <div>
                            <div>Oliver Gunning </div>
                            <div>Golf Travel Expert</div>
                            <div>Handicap - 0</div>
                        </div>
                    </div>
                    <div className="avatarSeller">
                        <FontAwesomeIcon
                            className="avatar"
                            icon={faCircleUser}
                        />
                    </div>
                </div>
                <Button type="primary" className="btnPhoneCall">
                    Call me on 0800 043 6644{' '}
                    <FontAwesomeIcon icon={faPhoneFlip} /> to book{' '}
                </Button>
            </div>
            <div className="inforPayMent">
                <div>
                    {arrGroup.map((item, index) => {
                        return (
                            <div key={index} className="viewinforPayment">
                                <div>{item?.nameGroup}</div>
                                <div className="numGroups">{item?.price}</div>
                                <img
                                    alt=""
                                    className="iconPlus"
                                    src={icons.plusIcon}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="price">
                    <div className="viewPrice">
                        <div className="totalPrice">Total price</div>
                        <div className="numTotalPrice">£1,494</div>
                    </div>
                    <div className="viewPrice">
                        <div className="totalDeposit">Total Deposit</div>
                        <div className="numTotalDeposit">£1,494</div>
                    </div>
                </div>
            </div>
            <div className="inforPayMent">
                <div className="contentNavigte">
                    Introduction from your Golf Travel Expert
                </div>
                <div className="contentNavigte">See itinerary in detail </div>
                <div className="contentNavigte">Pricing and booking </div>
                <div className="contentNavigte">Important information</div>
                <div className="contentNavigte">Terms & conditions </div>
            </div>
            <div className='groupsBtn'>
                <Button type="primary" className="btnDownload" ghost>
                    Download PDF <FontAwesomeIcon icon={faDownload} />
                </Button>
                <Button type="primary" className="btnShare" ghost>
                    Share Quote <FontAwesomeIcon icon={faShareNodes} />
                </Button>
            </div>
        </InformationPaymentStyle>
    );
};

export default InforPaymentCompoment;
