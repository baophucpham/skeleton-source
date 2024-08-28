import React from 'react';
import InformationPaymentStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faPhoneFlip } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';

const InforPaymentCompoment = () => {
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
                <div className="viewinforPayment">
                    <div>
                        <div>adsfdsf</div>
                        <div>hjgfjghghjhj</div>
                        <div>hjgfjghghjhj</div>
                    </div>
                    <div>
                        <div>adsfdsf</div>
                        <div>hjgfjghghjhj</div>
                        <div>hjgfjghghjhj</div>
                    </div>
                </div>
            </div>
        </InformationPaymentStyle>
    );
};

export default InforPaymentCompoment;
