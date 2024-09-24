import React, { useEffect, useState } from 'react';
import IntroductionGoflTravelStyle from './style';
import images from 'src/assets/image';
import icons from 'src/assets/icon';
import Carousel from 'src/components/carouselCustom';
import { arrCaurosel } from 'src/const/enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import StepComponent from './stepsComponent';
import { useSelector } from 'react-redux';
import { roleSelector } from 'src/redux/selectors/checkRoleSelecter';
import WhatOutGolferSayComponent from './whatOutGolfersSayComponent';
import { useLocation } from 'react-router-dom';
import { Skeleton } from 'antd';
import { getImageApi } from 'src/api/apiGetImage';

interface IntroductionGoflTravelProps {
    customProp: any;
}

const IntroductionGoflTravel: React.FC<IntroductionGoflTravelProps> = (
    props,
) => {
    const isRole = useSelector(roleSelector);
    const location: any = useLocation();
    const { customProp } = props;
    const queryParams = new URLSearchParams(location.search);
    const [mainImage, setMainImage] = useState<any>();
    const type = queryParams.get('type');

    const defautImage = customProp?.defaultImage?.sys?.id;

    useEffect(() => {
        if (defautImage) {
            const fetchData = async () => {
                try {
                    const response = await getImageApi(defautImage);
                    setMainImage(response);
                } catch (err) {
                    setMainImage(null);
                }
            };
            fetchData();
        }
    }, [defautImage]);

    const imageIntroDuction = `http:${mainImage?.fields?.file?.url}`;
    console.log(imageIntroDuction);

    const contentStandard =
        customProp?.agentIntroStandard?.content[0]?.content[0]?.value;
    const signinStandard =
        customProp?.agentIntroStandard?.content[1]?.content[0]?.value;
    const contentEvent =
        customProp?.salesAgentIntroTournament.content[0]?.content[0]?.value;
    const signinEvent =
        customProp?.salesAgentIntroTournament.content[1]?.content[0]?.value;

    const iconArr: Record<string, string> = {
        whyBookWithImage1: customProp?.whyBookWithImage1?.sys?.id,
        whyBookWithImage2: customProp?.whyBookWithImage2?.sys?.id,
        whyBookWithImage3: customProp?.whyBookWithImage3?.sys?.id,
        whyBookWithImage4: customProp?.whyBookWithImage4?.sys?.id,
    };

    const titleArr: Record<string, string> = {
        whyBookWithYgtTitle1: customProp?.whyBookWithYgtTitle1,
        whyBookWithYgtTitle2: customProp?.whyBookWithYgtTitle2,
        whyBookWithYgtTitle3: customProp?.whyBookWithYgtTitle3,
        whyBookWithYgtTitle4: customProp?.whyBookWithYgtTitle4,
    };

    const discriptionArr: Record<string, string> = {
        quoteWhyBookWithYourGolfTravel:
            customProp?.quoteWhyBookWithYourGolfTravel?.content[0]?.content[0]
                .value,
        quoteWhyBookWithYourGolfTravel2:
            customProp?.quoteWhyBookWithYourGolfTravel2?.content[0]?.content[0]
                .value,
        quoteWhyBookWithYourGolfTravel3:
            customProp?.quoteWhyBookWithYourGolfTravel3?.content[0]?.content[0]
                .value,
        quoteWhyBookWithYourGolfTravel4:
            customProp?.quoteWhyBookWithYourGolfTravel4?.content[0]?.content[0]
                .value,
    };

    const arrWhyContentNew = [1, 2, 3, 4].map((id) => ({
        id,
        icon: iconArr[`whyBookWithImage${id}`],
        title: titleArr[`whyBookWithYgtTitle${id}`],
        discription:
            discriptionArr[
                `quoteWhyBookWithYourGolfTravel${id === 1 ? '' : id}`
            ],
    }));

    useEffect(() => {}, [isRole]);

    return (
        <IntroductionGoflTravelStyle>
            {mainImage ? (
                <div className='viewMainImage'>
                    <img alt="" className="imgGoflTravel" src={imageIntroDuction} />
                </div>
            ) : (
                <Skeleton.Image className="imgGoflTravel" active={true} />
            )}
            <div className="discriptionGoflTravel">
                {customProp ? (
                    <div className="content">
                        {type === 'Event' ? contentEvent : contentStandard}
                    </div>
                ) : (
                    <Skeleton active={true} />
                )}
                <div className="signIn">
                    <div>
                        <div>
                            {type === 'Event' ? signinEvent : signinStandard}
                        </div>
                        <div className="signature">Oliver</div>
                    </div>
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
                    {arrWhyContentNew.map((item: any, index: any) => {
                        return (
                            <WhatOutGolferSayComponent
                                imageId={item.icon}
                                title={item.title}
                                content={item.discription}
                                key={index}
                            />
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
