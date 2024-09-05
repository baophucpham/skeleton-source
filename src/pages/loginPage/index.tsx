import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth_exited } from 'src/redux/actions/authenAction';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';

import LoginStyle from './style';
import images from 'src/assets/image';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen)

    const onFinish = () => {
        dispatch(auth_exited(true));
        history.push('/dashboard');
    };

    return (
        <LoginStyle>
            <div className="viewLogin">
                <div className="groupsItemLogin">
                    <img alt="" className="LogoIMG" src={images.logoYGT} />
                    <div className="titleLogin">Document Portal Login</div>
                    <div className="viewFromInput">
                        <Button
                            className="custom-btuton"
                            type="primary"
                            onClick={() => onFinish()}
                        >
                            Login with SSO
                        </Button>
                    </div>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
