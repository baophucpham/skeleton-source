import React, { useEffect } from 'react';
import PrivatePageStyle from './style';
import { useSelector } from 'react-redux';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';
import { useHistory } from 'react-router-dom';

const PrivatePage = () => {
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen);
    const naviLoginPage = () => {
        history.goBack();
    };
    return (
        <PrivatePageStyle>
            <div className="title">PrivatePage</div>
            <div style={{ background: 'red' }}>fdskfhdskjhjkhkjhkj</div>
            <button onClick={() => naviLoginPage()}>Login</button>
        </PrivatePageStyle>
    );
};

export default PrivatePage;
