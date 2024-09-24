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
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { Skeleton } from 'antd';

interface PricingAndBookingProps {
    dataReadyToBook?: any;
}

const PricingAndBookingComponent: React.FC<PricingAndBookingProps> = ({
    dataReadyToBook,
}) => {
    const location: any = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');

    const replacements: { [key: string]: string } = {
        '{agent tel number}': '123-456-7890',
        '{date}': '01/01/2024',
    };

    const readyToBookEvent =
        dataReadyToBook?.readyToBookEvent?.content[0]?.content
            .map((item: any) => item.value)
            .join('');
    let formattextReadyToBookEvent = readyToBookEvent?.replace(/\n/g, '<br/>');
    Object.keys(replacements).forEach((key) => {
        const regex = new RegExp(key, 'g');
        formattextReadyToBookEvent = formattextReadyToBookEvent?.replace(
            regex,
            replacements[key],
        );
    });

    const readyToBookStandard =
        dataReadyToBook?.readyToBookStandard?.content[0]?.content
            .map((item: any) => item.value)
            .join('');
    let formattextReadyToBookStandard = readyToBookStandard?.replace(
        /\n/g,
        '<br/>',
    );
    Object.keys(replacements).forEach((key) => {
        const regex = new RegExp(key, 'g');
        formattextReadyToBookStandard = formattextReadyToBookStandard?.replace(
            regex,
            replacements[key],
        );
    });

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
                    {dataReadyToBook ? (
                        <div>
                            <div className="titleAreaChoosen">
                                Ready to book?
                            </div>
                            <div className="contentAreaChoosen">
                                {type === 'Event'
                                    ? parse(formattextReadyToBookEvent)
                                    : parse(formattextReadyToBookStandard)}
                            </div>
                            <div className="btnEnd">
                                Click here to pay your £200 deposit and secure
                                your holiday
                            </div>
                        </div>
                    ) : (
                        <Skeleton active={true} />
                    )}
                </div>
                <div className="areaLogo">
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
