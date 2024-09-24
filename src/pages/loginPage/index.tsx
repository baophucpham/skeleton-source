import { Button } from 'antd';
import LoginStyle from './style';
import images from 'src/assets/image';

const Login = () => {
    const googleRedirectUrl = process.env.REACT_APP_REDIRECT_URL!;
    const clientId = process.env.REACT_APP_CLIENT_ID!;
    const domain = window.location.origin;
    const takeDomain = `${domain}`
    const allUrlRedirect=`${googleRedirectUrl}${clientId}${takeDomain}/oauth2/callback&response_type=code&scope=openid profile email`
    const onFinish = () => {
        window.location.href = allUrlRedirect;
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
                            onClick={onFinish}
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
