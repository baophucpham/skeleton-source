import React from 'react';
import InformationPaymentStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
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
                                <div>{item?.price}</div>
                                <img
                                    alt=""
                                    className="iconPlus"
                                    src={icons.plusIcon}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='price'>
                    <div>
                        <div>Total price</div>
                        <div>Total Deposit</div>
                    </div>
                    <div>
                        <div>£1,494</div>
                        <div>£1,494</div>
                    </div>
                </div>
            </div>
        </InformationPaymentStyle>
    );
};

export default InforPaymentCompoment;
