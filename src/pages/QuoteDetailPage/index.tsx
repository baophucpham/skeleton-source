import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Redirect,
    Route,
    BrowserRouter as Router,
    Switch,
    useLocation,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import IntroductionGoflTravel from './IntroductionGolfTravel';
import QouteNavigateCompoment from './QuoteNavigate';
import QuoteDetailPageStyle from './style';
import images from 'src/assets/image';
import { nameView } from 'src/const/enum';
import ItineraryInDetailComponent from './ItineraryInDetail';
import PricingAndBookingComponent from './PricingAndBooking';
import ImportantInformationComponent from './ImportantInformation';
import TermsAndCoditionsComponent from './TermsAndCoditions';
import { Button, Popover } from 'antd';
import { checkRole } from 'src/redux/actions/roleCheckAction';

const QuoteDetailPage = () => {
    const [showRole, setShowRole] = useState<string>('Preview mode');
    const [roleBtn, setRoleBtn] = useState<string>('Edit');
    const dispatch = useDispatch();
    const [childData, setChildData] = useState<any>({
        id: nameView.GOFL_TRAVEL_EXPERT,
        content: 'Introduction from your Golf Travel Expert',
    });
    const location = useLocation();
    const role = location?.state;
    useEffect(() => {
        if (role) {
            setShowRole(String(role));
            dispatch(checkRole(role))
        }
    }, [role]);

    const handleChildDataChange = (data: string) => {
        setChildData(data);
    };
    const changeRoleEdit = () => {
        setShowRole('Edit mode');
        setRoleBtn('Save');
        dispatch(checkRole('Edit mode'))
    };
    return (
        <Router>
            <QuoteDetailPageStyle>
                {showRole && (
                    <div className="headerShowRole">
                        <div className="viewRole">
                            <div>
                                <span className="styleContentRole">
                                    You're viewing quote in{' '}
                                </span>
                                <span className="styleRole">{showRole}</span>
                            </div>
                            <div className="viewBtnRole">
                                <Button
                                    type="primary"
                                    className="btnEdit"
                                    onClick={changeRoleEdit}
                                    ghost
                                >
                                    {roleBtn}
                                </Button>
                                <Button type="primary" className="btnSend">
                                    send
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
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
                                <FontAwesomeIcon icon={faCoins} />
                                <p>
                                    You’ve saved on your trip today with a £200
                                    discount
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="headerTitle">
                        <div className="titleHeader ">
                            {showRole === 'Edit mode' ? (
                                <Popover
                                    placement="rightTop"
                                    content={'Click to edit'}
                                >
                                    <div className="editTitleHeader">
                                        Gunning Group’s Belfry Golf Trip (August
                                        2024)
                                    </div>
                                </Popover>
                            ) : (
                                <div>
                                    Gunning Group’s Belfry Golf Trip (August
                                    2024)
                                </div>
                            )}
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
