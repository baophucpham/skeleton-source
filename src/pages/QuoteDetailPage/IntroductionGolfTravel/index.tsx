import React from 'react';
import IntroductionGoflTravelStyle from './style';
import images from 'src/assets/image';
import icons from 'src/assets/icon';
import Carousel from 'src/components/carouselCustom';
import { arrCaurosel, arrWhyContent } from 'src/const/enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import StepComponent from './stepsComponent';

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
                <div className="signIn">
                    <div className="signature">Oliver</div>
                    <div className="inforSeller">
                        <div>Oliver Gunning</div>
                        <div>0207 336 5340 </div>
                        <div className="mailSeller">
                            {' '}
                            oliverg@yourgolftravel.com
                        </div>
                    </div>
                </div>
            </div>
            <div className="viewWhyContent">
                <div className="titleWhyContent">
                    Why book with Your Golf Travel?
                </div>
                <div className="showItemWhy">
                    {arrWhyContent.map((item, index) => {
                        return (
                            <div className="groupWhyItem" key={index}>
                                <img
                                    alt=""
                                    className="iconWhy"
                                    src={item.icon}
                                />
                                <p className="titleItem">{item.title}</p>
                                <p className="discriptionItem">
                                    {item.discription}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="carouselView">
                <div className="titleWhyContent">What our golfers say</div>
                <Carousel itemsToShow={2}>
                    {arrCaurosel.map((item, index) => {
                        return (
                            <div className="viewItemCarousel" key={index}>
                                <div className="titleItemCarousel">
                                    <div className="pointCarousel">
                                        {item.piont}
                                    </div>
                                    <div className="commentCarousel">
                                        {item.comment}
                                    </div>
                                </div>
                                <div className="discriptionCarousel">
                                    {item.disciption}{' '}
                                    <img alt="" src={icons.qouteRight} />
                                </div>
                                <div className="SignCarousel">{item.sign}</div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
            <div className="carouselView">
                <div className="titleWhyContent">Next steps</div>
                <StepComponent />
            </div>
            <div className="endView">
                <div className="titleWhyContent">
                    About <span className="nameSeller">Oliver Gunning </span> -
                    Your UK & Ireland Golf Travel Expert
                </div>
                <div className="viewEnd">
                    <div className="commentSeller">
                        {`I’m a keen golfer and proud to play off scratch. I
                        enjoyed my first round with my grandad at 6 years old
                        and was instantly bitten by the golfing bug. Since then
                        I’ve been lucky enough to play in 12 countries. My ideal
                        golf holiday is a sunny afternoon at Gleneagles with
                        some good mates, followed by a pint of Guinness. I love
                        helping golfers find their perfect trip, so get in
                        touch, and I’ll get you on the fairways.`}
                    </div>
                    <div className="avatarSignView">
                        <div className="avatarSeller">
                            <FontAwesomeIcon
                                className="avatar"
                                icon={faCircleUser}
                            />
                        </div>
                        <div className="signEnd">
                            <div className="signature">O.Gunning</div>
                            <div>
                                <div className="phone">0207 336 5340</div>
                                <div className="email">
                                    oliverg@yourgolftravel.com
                                </div>
                                <div>Handicap - 0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </IntroductionGoflTravelStyle>
    );
};

export default IntroductionGoflTravel;
