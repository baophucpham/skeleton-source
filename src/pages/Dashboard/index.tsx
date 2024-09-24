import React, { useEffect, useRef, useState } from 'react';
import DashboardStyle from './styled';
import images from 'src/assets/image';
import icons from 'src/assets/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ViewTableComponent from './listQuotesComponent/index';
import { useDispatch, useSelector } from 'react-redux';
import { authExited } from 'src/redux/actions/authenAction';
import { useHistory } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { listQuoteSelector } from 'src/redux/selectors/listQuoteSelecter';
import { getListAction } from 'src/redux/actions/getListAction';

const DashboardComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const token = localStorage.getItem('access_token');
    const [show, setIsShow] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsShow(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [dropdownRef]);

    const decoded = jwtDecode(`${token}`) as {
        family_name: string;
        given_name: string;
    };
    const fullName = `${decoded.given_name} ${decoded.family_name}`;

    const logOutBtn = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        dispatch(authExited(false));
        history.push('/login');
    };
    const showDropdown = () => {
        setIsShow(!show);
    };

    return (
        <DashboardStyle>
            <div className="menuDashboard">
                <img alt="" className="LogoIMG" src={images.logoYGT} />
                <div className="menuBtn">
                    <div className="btnQuotes">
                        <img alt="" className="iconfile" src={icons.iconFile} />
                        <div>Quotes</div>
                        <img
                            alt=""
                            className="iconfile"
                            src={icons.arrowRight}
                        />
                    </div>
                </div>
                <div
                    className="btmAdmin"
                    onClick={showDropdown}
                    ref={dropdownRef}
                >
                    <FontAwesomeIcon className="avatar" icon={faCircleUser} />
                    <div>
                        <div className="nameSeller">{fullName}</div>
                        <div className="position">Sales Expert</div>
                    </div>
                    <img alt="" className="iconfile" src={icons.arrowDown} />
                </div>
                {show && (
                    <div id="myDropdown" className="dropdown-content-login">
                        <div className="logOutBtn" onClick={logOutBtn}>
                            Log out
                        </div>
                    </div>
                )}
            </div>
            <div className="tableDashboard">
                <div className="headerTable">
                    <div className="showNameSeller">Hi {fullName}</div>
                </div>

                <div className="table">
                    <ViewTableComponent />
                </div>
                <div>Version 1.2.7</div>
            </div>
        </DashboardStyle>
    );
};

export default DashboardComponent;
