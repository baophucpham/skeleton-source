import React from 'react';
import ModalTouristDetinationStyle from './style';
import images from 'src/assets/image';

const ModalTouristDetination = () => {
    return (
        <ModalTouristDetinationStyle>
            <img alt="" className="imgLocation" src={images.hotelImgFull} />
            <div className='content'>
                The Belfry Hotel & Resort is a legendary golf destination
                renowned for its three championship courses, including the
                iconic Brabazon Course, which has hosted the Ryder Cup four
                times. The resort offers state-of-the-art practice facilities
                and a PGA Academy, providing a world-class experience for
                golfers of all skill levels. With its luxurious accommodations,
                fine dining options, and stunning natural surroundings, The
                Belfry is the perfect getaway for golf enthusiasts seeking both
                challenge and relaxation in the heart of England.
            </div>
        </ModalTouristDetinationStyle>
    );
};

export default ModalTouristDetination;
