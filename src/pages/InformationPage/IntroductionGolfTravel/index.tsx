import React from 'react';
import InformationPaymentStyle from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleUser,
    faDownload,
    faPhoneFlip,
    faShareNodes,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'antd';
import icons from 'src/asset/icon';
import IntroductionGoflTravelStyle from './style';
import images from 'src/asset/image';

const IntroductionGoflTravel = () => {
    return (
        <IntroductionGoflTravelStyle>
            <img alt="" className="imgGoflTravel" src={images.golfView} />
            <div className="discriptionGoflTravel">
                <div className="content">
                    I have prepared the quote for your golf holiday at The
                    Belfry. The package includes accommodation, green fees, and
                    additional amenities tailored to enhance your experience.
                    Great talking to you today, and I hope you’re enjoying your
                    new clubs! Please review the attached details, and feel free
                    to reach out if you have any questions or require
                    adjustments. I look forward to assisting you in creating an
                    unforgettable golf getaway.
                </div>
                <div className='signIn'>
                    <div>Oliver</div>
                    <div className='inforSeller'>
                        <div>Oliver Gunning</div>
                        <div>0207 336 5340 </div>
                        <div className='mailSeller'> oliverg@yourgolftravel.com</div>
                    </div>
                </div>
            </div>
        </IntroductionGoflTravelStyle>
    );
};

export default IntroductionGoflTravel;
