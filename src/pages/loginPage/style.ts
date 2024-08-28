import styled from '@emotion/styled';

const LoginStyle = styled('div')`
    display: flex;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 768px;
        overflow: hidden;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 1024px;
        overflow: hidden;
    }
    .title {
        font-size: 16px;
    }
    .imageBackground {
        width: 70%;
        height: 100%;
    }
    .viewLogin {
        width: 30%;
        height: 100%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 62px 98px 62px 98px;
    }
    .LogoIMG {
        margin-bottom: 90px;
    }
    .titleLogin {
        margin-bottom: 64px;
        font-weight: 600;
        font-size: 38px;
        line-height: 45.6px;
        color: #555555;
    }
    .custom-label .ant-form-item-label > label {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #4d5959;
    }
    .input {
        width: 100%;
        height: 65px;
        border-radius: 0px;
    }
    .viewFromInput {
        width: 100%;
    }
    .custom-btuton {
        width: 100%;
        height: 60px;
        border-radius: 0px;
        background-color: #006699;
        font-weight: 500;
        font-size: 26px;
        line-height: 31.2px;
    }
    .custom-btuton:hover {
        background-color: #004195 !important;
    }
    .checkBox {
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
    }
    .ant-form-item-label
        > label.ant-form-item-required:not(
            .ant-form-item-required-mark-optional
        )::before {
        display: none;
    }
    .ant-form-item-control > div {
        display: block !important;
    }
    @media screen and (max-width: 768px) {
        .imageBackground {
            width: 60%;
            height: 100%;
        }
        .viewLogin {
            width: 40%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 45px 60px 55px;
        }
        .LogoIMG {
            margin-bottom: 70px;
        }
        .titleLogin {
            margin-bottom: 42px;
            font-weight: 600;
            font-size: 17px;
            line-height: 32.6px;
            color: #555555;
        }
        .custom-label .ant-form-item-label > label {
            font-weight: 500;
            font-size: 10px;
            line-height: 20px;
            color: #4d5959;
        }
        .input {
            height: 50px;
        }
        .checkBox {
            font-size: 10px;
        }
        .custom-btuton {
            height: 40px;
            font-size: 15px;
        }
    }
    @media screen and (max-width: 1024px) {
        .imageBackground {
            width: 60%;
            height: 100%;
        }
        .viewLogin {
            width: 40%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 60px 45px 60px 55px;
        }
        .LogoIMG {
            margin-bottom: 70px;
        }
        .titleLogin {
            margin-bottom: 42px;
            font-weight: 600;
            font-size: 17px;
            line-height: 32.6px;
            color: #555555;
        }
        .custom-label .ant-form-item-label > label {
            font-weight: 500;
            font-size: 10px;
            line-height: 20px;
            color: #4d5959;
        }
        .input {
            height: 50px;
        }
        .checkBox {
            font-size: 10px;
        }
        .custom-btuton {
            height: 40px;
            font-size: 15px;
        }
    }
`;
export default LoginStyle;
