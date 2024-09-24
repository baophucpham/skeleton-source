import styled from '@emotion/styled';
import images from 'src/assets/image';

const LoginStyle = styled('div')`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-image: url(${images.ygtBackgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    /* @media screen and (max-width: 1024px) {
        width: 100%;
        height: 768px;
        overflow: hidden;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 1024px;
        overflow: hidden;
    } */
    .title {
        font-size: 16px;
    }
    .imageBackground {
        width: 60%;
    }
    .viewLogin {
        width: 40%;
        background-color: #ffffff;
        padding: 100px 40px 100px 40px;
    }
    .LogoIMG {
        margin-bottom: 48px;
    }
    .titleLogin {
        margin-bottom: 48px;
        font-weight: 600;
        font-size: 34px;
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
    .groupsItemLogin {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
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
    @media screen and (max-width: 768px) {
        .viewLogin {
            padding: 30px 30px 30px 30px;
        }
        .LogoIMG {
            margin-bottom: 20px;
            width: 80%;
        }
        .titleLogin {
            margin-bottom: 20px;
            font-weight: 600;
            font-size: 22px;
            line-height: 45.6px;
            color: #555555;
        }
        .custom-btuton {
            font-size: 22px;
        }
    }
    @media screen and (max-width: 375px) {
        .viewLogin {
            padding: 30px 30px 30px 30px;
        }
        .LogoIMG {
            margin-bottom: 10px;
            width: 90%;
        }
        .titleLogin {
            margin-bottom: 10px;
            font-weight: 600;
            font-size: 7px;
            line-height: 15px;
            color: #555555;
        }
        .custom-btuton {
            font-size: 7px;
            height: 21px;
        }
    }
`;
export default LoginStyle;
