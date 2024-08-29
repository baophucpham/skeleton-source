import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleUser,
    faDownload,
    faPhoneFlip,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import icons from 'src/assets/icon';
import QouteNavigateStyle from './style';
import { arrGroup, nameView } from 'src/const/enum';

interface ChildComponentProps {
    onDataChange: (data: any) => void;
}

const QouteNavigateCompoment: React.FC<ChildComponentProps> = ({
    onDataChange,
}) => {
    const [navigate, setNavigate] = useState<Number>(1);
    const clickForChangeView = (id: number, content: string) => {
        setNavigate(id);
        onDataChange({ id: id, content: content });
    };
    return (
        <QouteNavigateStyle>
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
                <div
                    className={
                        navigate === nameView.GOFL_TRAVEL_EXPERT
                            ? 'contentNavigteFocus'
                            : 'contentNavigte'
                    }
                    onClick={() =>
                        clickForChangeView(
                            nameView.GOFL_TRAVEL_EXPERT,
                            'Introduction from your Golf Travel Expert',
                        )
                    }
                >
                    {navigate === nameView.GOFL_TRAVEL_EXPERT && (
                        <img
                            alt=""
                            className="arrowLeft"
                            src={icons.arrowLeft}
                        />
                    )}
                    <span>Introduction from your Golf Travel Expert</span>
                </div>
                <div
                    className={
                        navigate === nameView.ITINERARY_IN_DETAIL
                            ? 'contentNavigteFocus'
                            : 'contentNavigte'
                    }
                    onClick={() =>
                        clickForChangeView(
                            nameView.ITINERARY_IN_DETAIL,
                            'See itinerary in detail',
                        )
                    }
                >
                    {navigate === nameView.ITINERARY_IN_DETAIL && (
                        <img
                            alt=""
                            className="arrowLeft"
                            src={icons.arrowLeft}
                        />
                    )}

                    <span>See itinerary in detail</span>
                </div>
                <div
                    className={
                        navigate === nameView.PRICING_AND_BOOKING
                            ? 'contentNavigteFocus'
                            : 'contentNavigte'
                    }
                    onClick={() =>
                        clickForChangeView(
                            nameView.PRICING_AND_BOOKING,
                            'Pricing and booking',
                        )
                    }
                >
                    {navigate === nameView.PRICING_AND_BOOKING && (
                        <img
                            alt=""
                            className="arrowLeft"
                            src={icons.arrowLeft}
                        />
                    )}
                    <span>Pricing and booking</span>
                </div>
                <div
                    className={
                        navigate === nameView.IMPORTANT_INFORMATION
                            ? 'contentNavigteFocus'
                            : 'contentNavigte'
                    }
                    onClick={() =>
                        clickForChangeView(
                            nameView.IMPORTANT_INFORMATION,
                            'Important information',
                        )
                    }
                >
                    {navigate === nameView.IMPORTANT_INFORMATION && (
                        <img
                            alt=""
                            className="arrowLeft"
                            src={icons.arrowLeft}
                        />
                    )}
                    <span>Important information</span>
                </div>
                <div
                    className={
                        navigate === nameView.TERM_AND_CONDITION
                            ? 'contentNavigteFocus'
                            : 'contentNavigte'
                    }
                    onClick={() =>
                        clickForChangeView(
                            nameView.TERM_AND_CONDITION,
                            'Terms & conditions',
                        )
                    }
                >
                    {navigate === nameView.TERM_AND_CONDITION && (
                        <img
                            alt=""
                            className="arrowLeft"
                            src={icons.arrowLeft}
                        />
                    )}
                    <span>Terms & conditions</span>
                </div>
            </div>
            <div className="groupsBtn">
                <Button type="primary" className="btnDownload" ghost>
                    Download PDF <FontAwesomeIcon icon={faDownload} />
                </Button>
                <Button type="primary" className="btnShare" ghost>
                    Share Quote <FontAwesomeIcon icon={faShareNodes} />
                </Button>
            </div>
        </QouteNavigateStyle>
    );
};

export default QouteNavigateCompoment;
