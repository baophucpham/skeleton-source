import React, { useState } from 'react';
import ItineraryInDetailStyle from './style';
import { dataItineraryInDetail } from 'src/const/enum';
import images from 'src/assets/image';
import icons from 'src/assets/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from 'src/components/modalCustom';
import ModalTouristDetination from './ModalTouristDestination';

const ItineraryInDetailComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleClose = () => {
        setIsModalVisible(false);
    };
    return (
        <ItineraryInDetailStyle>
            <div className="titleDay1">Day 1: Mon 5th August 2024</div>
            <div className="hotelAndGoflView">
                <img
                    alt=""
                    className="imgHotelOrGofl"
                    src={images.hotelImage}
                />
                <div>
                    <div className="titleItem">Stay at The Belfry </div>
                    <div className="addressHotelOrGolf">Warwickshire</div>
                    <div className="contentInfor">
                        4 Nights on Sunday 25th August 2025
                    </div>
                    <div className="discriptHotel">
                        x2 Signature Room, Dinner, Bed & Breakfast
                    </div>
                    <div className="discriptHotel">
                        x2 Superior Room, All-inclusive
                    </div>
                    <div className="contentInfor">
                        3 Nights on Monday 26th August 2025
                    </div>
                    <div className="discriptHotel">{`x2 Signature Room (Single Occupancy), Half-Board`}</div>
                    <div className="discriptHotel">
                        x4 Superior Room, All-inclusive
                    </div>
                </div>
                <div className="iconAndBtnItem">
                    <img
                        alt=""
                        className="iconHotelorGolf"
                        src={icons.hotelIcon}
                    />
                    <div className="btnSeeDetail" onClick={() => showModal()}>
                        See details
                    </div>
                </div>
            </div>
            <div className="reviewSeller">
                <div>
                    “I was here last month and there were some great places to
                    eat in the evening. Excellent steak in the main bar”
                </div>
                <div className="avatarSeller">
                    <FontAwesomeIcon className="avatar" icon={faCircleUser} />
                </div>
            </div>
            <div className="hotelAndGoflView">
                <img
                    alt=""
                    className="imgHotelOrGofl"
                    src={images.hotelImage}
                />
                <div>
                    <div className="titleItem">Stay at The Belfry </div>
                    <div className="addressHotelOrGolf">Warwickshire</div>
                    <div className="contentInfor">
                        4 Nights on Sunday 25th August 2025
                    </div>
                    <div className="discriptHotel">
                        x2 Signature Room, Dinner, Bed & Breakfast
                    </div>
                    <div className="discriptHotel">
                        x2 Superior Room, All-inclusive
                    </div>
                    <div className="contentInfor">
                        3 Nights on Monday 26th August 2025
                    </div>
                    <div className="discriptHotel">{`x2 Signature Room (Single Occupancy), Half-Board`}</div>
                    <div className="discriptHotel">
                        x4 Superior Room, All-inclusive
                    </div>
                </div>
                <div className="iconAndBtnItem">
                    <img
                        alt=""
                        className="iconHotelorGolf"
                        src={icons.hotelIcon}
                    />
                    <div className="btnSeeDetail" onClick={() => showModal()}>
                        See details
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="titleDay1">Day 2: Tue 6th August 2024</div>
            {/*  */}
            <div className="hotelAndGoflView">
                <img
                    alt=""
                    className="imgHotelOrGofl"
                    src={images.hotelImage}
                />
                <div>
                    <div className="titleItem">Stay at The Belfry </div>
                    <div className="addressHotelOrGolf">Warwickshire</div>
                    <div className="contentInfor">
                        4 Nights on Sunday 25th August 2025
                    </div>
                    <div className="discriptHotel">
                        x2 Signature Room, Dinner, Bed & Breakfast
                    </div>
                    <div className="discriptHotel">
                        x2 Superior Room, All-inclusive
                    </div>
                    <div className="contentInfor">
                        3 Nights on Monday 26th August 2025
                    </div>
                    <div className="discriptHotel">{`x2 Signature Room (Single Occupancy), Half-Board`}</div>
                    <div className="discriptHotel">
                        x4 Superior Room, All-inclusive
                    </div>
                </div>
                <div className="iconAndBtnItem">
                    <img
                        alt=""
                        className="iconHotelorGolf"
                        src={icons.hotelIcon}
                    />
                    <div className="btnSeeDetail" onClick={() => showModal()}>
                        See details
                    </div>
                </div>
            </div>
            <div className="reviewSeller">
                <div>
                    “I was here last month and there were some great places to
                    eat in the evening. Excellent steak in the main bar”
                </div>
                <div className="avatarSeller">
                    <FontAwesomeIcon className="avatar" icon={faCircleUser} />
                </div>
            </div>
            <div className="hotelAndGoflView">
                <img
                    alt=""
                    className="imgHotelOrGofl"
                    src={images.hotelImage}
                />
                <div>
                    <div className="titleItem">Stay at The Belfry </div>
                    <div className="addressHotelOrGolf">Warwickshire</div>
                    <div className="contentInfor">
                        4 Nights on Sunday 25th August 2025
                    </div>
                    <div className="discriptHotel">
                        x2 Signature Room, Dinner, Bed & Breakfast
                    </div>
                    <div className="discriptHotel">
                        x2 Superior Room, All-inclusive
                    </div>
                    <div className="contentInfor">
                        3 Nights on Monday 26th August 2025
                    </div>
                    <div className="discriptHotel">{`x2 Signature Room (Single Occupancy), Half-Board`}</div>
                    <div className="discriptHotel">
                        x4 Superior Room, All-inclusive
                    </div>
                </div>
                <div className="iconAndBtnItem">
                    <img
                        alt=""
                        className="iconHotelorGolf"
                        src={icons.hotelIcon}
                    />
                    <div className="btnSeeDetail" onClick={() => showModal()}>
                        See details
                    </div>
                </div>
            </div>
            <ModalComponent
                width={525}
                visible={isModalVisible}
                onClose={handleClose}
                title="Stay at The Belfry"
                content={<ModalTouristDetination />}
            />
        </ItineraryInDetailStyle>
    );
};

export default ItineraryInDetailComponent;
