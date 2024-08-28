import React, { useEffect, useState } from 'react';
import InformationPageStyle from './style';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';
import { useHistory } from 'react-router-dom';
import images from 'src/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import InforPaymentCompoment from './InforPayment';
import IntroductionGoflTravel from './IntroductionGolfTravel';

const InformationPage = () => {
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen);
    const naviLoginPage = () => {
        history.goBack();
    };
    return (
        <InformationPageStyle>
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
                <div className="titleview">
                    Introduction from your Golf Travel Expert
                </div>
            </div>
            <div className="viewShowInfor">
                <div className="viewInforLeft"><IntroductionGoflTravel/></div>
                <div className="viewInforRight">
                    <InforPaymentCompoment />
                </div>
            </div>
        </InformationPageStyle>
    );
};

export default InformationPage;
