import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import IntroductionGoflTravel from './IntroductionGolfTravel';
import QouteNavigateCompoment from './QuoteNavigate';
import QuoteDetailPageStyle from './style';
import images from 'src/assets/image';
import { nameView } from 'src/const/enum';
import ItineraryInDetailComponent from './ItineraryInDetail';
import PricingAndBookingComponent from './PricingAndBooking';
import ImportantInformationComponent from './ImportantInformation';
import TermsAndCoditionsComponent from './TermsAndCoditions';

const QuoteDetailPage = () => {
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);
    const [childData, setChildData] = useState<any>({
        id: nameView.GOFL_TRAVEL_EXPERT,
        content: 'Introduction from your Golf Travel Expert',
    });

    const naviLoginPage = () => {
        history.goBack();
    };

    const handleChildDataChange = (data: string) => {
        setChildData(data);
    };
    return (
        <QuoteDetailPageStyle>
            <div className="headerPage">
                <div className="logoHeader" onClick={() => naviLoginPage()}>
                    <img alt="" className="LogoIMG" src={images.logoYGT} />
                </div>
                <div className="viewPromotion" onClick={() => naviLoginPage()}>
                    <div className="contentBtnPromotion">
                        <p>Promo: £10 OFF when you book today</p>
                        <FontAwesomeIcon icon={faMoneyBillWave} />
                    </div>
                </div>
            </div>
            <div className="headerTitle">
                <div className="titleHeader">
                    Gunning Group’s Belfry Golf Trip (August 2024)
                </div>
                <div className="titleview">{childData.content}</div>
            </div>
            <div className="viewShowInfor">
                <div className="viewInforLeft">
                    {childData.id === nameView.GOFL_TRAVEL_EXPERT && (
                        <IntroductionGoflTravel />
                    )}
                    {childData.id === nameView.ITINERARY_IN_DETAIL && (
                        <ItineraryInDetailComponent />
                    )}
                    {childData.id === nameView.PRICING_AND_BOOKING && (
                        <PricingAndBookingComponent/>
                    )}
                    {childData.id === nameView.IMPORTANT_INFORMATION && (
                        <ImportantInformationComponent/>
                    )}
                    {childData.id === nameView.TERM_AND_CONDITION && (
                        <TermsAndCoditionsComponent/>
                    )}
                </div>
                <div className="viewInforRight">
                    <QouteNavigateCompoment
                        onDataChange={handleChildDataChange}
                    />
                </div>
            </div>
        </QuoteDetailPageStyle>
    );
};

export default QuoteDetailPage;
