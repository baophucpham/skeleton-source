import React from 'react';
import IntroductionGoflTravelStyle from './style';
import images from 'src/asset/image';
import icons from 'src/asset/icon';
import { Carousel } from 'antd';

const IntroductionGoflTravel = () => {
    const arrWhyContent = [
        {
            id: 1,
            icon: `${icons.golfTravelExpert}`,
            title: 'Golf Travel Experts',
            discription:
                'A dedicated expert in your chosen destination as standard',
        },
        {
            id: 2,
            icon: `${icons.bestPriceGuaranteed}`,
            title: 'Best Price Guaranteed',
            discription:
                'Value you can trust and payment options you can rely on.',
        },
        {
            id: 3,
            icon: `${icons.unbeatableChoice}`,
            title: 'Unbeatable Choice',
            discription: '3500+ destinations in 24 countries chosen for you.',
        },
        {
            id: 4,
            icon: `${icons.industryLeadingProtection}`,
            title: 'Industry leading Protection ',
            discription: 'ABTOT & ATOL safeguards for greater peace of mind.',
        },
    ];
    const contentStyle: React.CSSProperties = {
        margin: 0,
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#fff',
    };
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
                    <div>Oliver</div>
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
                <Carousel
                    arrows
                    infinite={false}
                    nextArrow={
                        <img
                            alt=""
                            className="arrowStep"
                            style={{ fontSize: '32.987px' }}
                            src={icons.rightArrow}
                        />
                    }
                    prevArrow={
                        <img
                            alt=""
                            className="arrowStep"
                            style={{ fontSize: '32.987px' }}
                            src={icons.leftArrow}
                        />
                    }
                >
                    <div>
                        <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
            </div>
            <div className="carouselView">
                <div className="titleWhyContent">Next steps</div>
                <div className="showItemStep">
                    {arrWhyContent.map((item, index) => {
                        return (
                            <div className="groupWhyItem" key={index}>
                                <img
                                    alt=""
                                    className="iconWhy"
                                    src={item.icon}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="endView">
            <div className="titleWhyContent">About <span className='nameSeller'>Oliver Gunning </span> - Your UK & Ireland Golf Travel Expert</div>
            </div>
        </IntroductionGoflTravelStyle>
    );
};

export default IntroductionGoflTravel;
