import styled from '@emotion/styled';

const InformationPageStyle = styled('div')`
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    height: 1080px;
    overflow-y: auto;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
    .logoHeader {
        width: 234px;
        height: 86px;
    }
    .headerPage {
        background-color: #fff;
        padding: 43px 129px 29px 129px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
       
    }
    .viewPromotion {
        width: 40%;
        height: 60%;
        color: #0a987c;
        font-size: 21.333px;
        font-style: normal;
        font-weight: 900;
        line-height: 32.753px;
        border-radius: 6.299px;
        border: 2.286px solid #12b897;
        background: rgba(18, 184, 151, 0.1);
        padding: 20px 15px 20px 15px;
    }
    .contentBtnPromotion {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .headerTitle {
        /* width: 100%; */
        padding-top: 38px;
        padding-bottom: 38px;
        padding: 38px 129px 38px 129px;
    }
    .titleHeader {
        color: #000;
        font-size: 38px;
        font-style: normal;
        font-weight: 900;
        line-height: 45.302px;
    }
    .titleview {
        color: #666;
        font-size: 38px;
        font-style: normal;
        font-weight: 500;
        line-height: 45.302px;
    }
    .viewShowInfor{
        background: #fff;
        padding: 55px 129px 55px 129px;
        display: flex;
        justify-content: space-between;
    }
    .viewInforLeft{
        width: 69%;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        border-radius: 8px;
    }
    .viewInforRight{
        width: 30%;
        box-shadow: 0px 0px 20px 0px rgba(156, 171, 194, 0.4);
        border-radius: 8px;
    }
`;
export default InformationPageStyle;
