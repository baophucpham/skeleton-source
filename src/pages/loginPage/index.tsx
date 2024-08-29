import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth_exited } from 'src/redux/actions/authenAction';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';

import LoginStyle from './style';
import images from 'src/assets/image';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);

    const onFinish = () => {
        dispatch(auth_exited(isAuthen));
        history.push('/dashboard');
    };

    return (
        <LoginStyle>
            <img
                alt=""
                className="imageBackground"
                src={images.ygtBackgroundImage}
            />
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
