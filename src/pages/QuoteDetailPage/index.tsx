import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
    useHistory,
} from 'react-router-dom';
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

    const handleChildDataChange = (data: string) => {
        setChildData(data);
    };
    return (
        <Router>
            <QuoteDetailPageStyle>
                <div className="deskTopView">
                    <div className="headerPage">
                        <div className="logoHeader">
                            <img
                                alt=""
                                className="LogoIMG"
                                src={images.logoYGT}
                            />
                        </div>
                        <div className="viewPromotion">
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
                    {(childData.id === nameView.PRICING_AND_BOOKING ||
                        childData.id === nameView.IMPORTANT_INFORMATION ||
                        childData.id === nameView.TERM_AND_CONDITION) && (
                        <div className="viewShowImage">
                            <img
                                alt=""
                                className="imageGoft"
                                src={images.imageGoft}
                            />
                        </div>
                    )}
                    <div className="viewShowInfor">
                        <div className="viewInforLeft">
                            <Switch>
                                <Route exact path="/quoteDetail">
                                    <Redirect to="/quoteDetail/introduction" />
                                </Route>
                                <Route
                                    path="/quoteDetail/introduction"
                                    component={IntroductionGoflTravel}
                                />
                                <Route
                                    path="/quoteDetail/itineraryInDetail"
                                    component={ItineraryInDetailComponent}
                                />
                                <Route
                                    path="/quoteDetail/pricingAndBooking"
                                    component={PricingAndBookingComponent}
                                />
                                <Route
                                    path="/quoteDetail/importantInformation"
                                    component={ImportantInformationComponent}
                                />
                                <Route
                                    path="/quoteDetail/termsAndCoditions"
                                    component={TermsAndCoditionsComponent}
                                />
                                <Route
                                    render={() => (
                                        <Redirect to="/quoteDetail/introduction" />
                                    )}
                                />
                            </Switch>
                        </div>
                        <div className="viewInforRight">
                            <QouteNavigateCompoment
                                onDataChange={handleChildDataChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mobileView">isMobile</div>
            </QuoteDetailPageStyle>
        </Router>
    );
};

export default QuoteDetailPage;
