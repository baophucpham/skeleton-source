import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth_exited } from 'src/redux/actions/authenAction';
import { isAuthSelector } from 'src/redux/selectors/authenSelector';
import images from '../../assets/image';
import LoginStyle from './style';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuthen = useSelector(isAuthSelector);
    console.log(isAuthen);

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        dispatch(auth_exited(true));
        history.push('/privatePage');
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (
        errorInfo,
    ) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LoginStyle>
            <img
                alt=""
                className="imageBackground"
                src={images.ygtBackgroundImage}
            />
            <div className="viewLogin">
                <img alt="" className="LogoIMG" src={images.logoYGT} />
                <div className="titleLogin">Document Portal Login</div>
                <div className="viewFromInput">
                    <Form
                        name=""
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: false }}
                        layout="vertical"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item<FieldType>
                            label="Email or Username"
                            name="username"
                            className="custom-label"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input
                                className="input"
                                placeholder="Email or Username"
                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            label="Password"
                            name="password"
                            className="custom-label"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password
                                className="input"
                                placeholder="Password"
                                iconRender={(visible) => null}
                            />
                        </Form.Item>
                        <Form.Item<FieldType>
                            name="remember"
                            valuePropName="checked"
                        >
                            <Checkbox className="checkBox">
                                Remember me
                            </Checkbox>
                        </Form.Item>
                        <Form.Item className="custom-btuton">
                            <Button
                                className="custom-btuton"
                                type="primary"
                                htmlType="submit"
                            >
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </LoginStyle>
    );
};

export default Login;
