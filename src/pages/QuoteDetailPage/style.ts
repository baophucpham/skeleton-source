import styled from '@emotion/styled';

const QuoteDetailPageStyle = styled('div')`
    display: flex;
    flex-direction: column;
    background: #f2f2f2;
    .mobileView {
        display: none;
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
        width: 65%;
        height: 64px;
        color: #1a91ff;
        font-size: 21.333px;
        font-style: normal;
        font-weight: 900;
        line-height: 32.753px;
        border-radius: 6.299px;
        border: 2.286px solid #1a91ff;
        background: rgba(26, 145, 255, 0.1);
        display: flex;
        align-items: center;
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
    .viewShowInfor {
        background: #fff;
        padding: 55px 129px 55px 129px;
        display: flex;
        justify-content: space-between;
    }
    .viewShowImage {
        background: #fff;
        padding: 55px 129px 0px 129px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .viewInforLeft {
        width: 69%;
    }
    .viewInforRight {
        width: 30%;
    }
    .imageGoft {
        width: 100%;
        border-radius: 6px;
    }
    .headerShowRole {
        background: #fff;
    }
    .viewRole {
        padding: 16px 129px 16px 129px;
        display: flex;
        justify-content: space-between;
        background-color: rgba(184, 138, 18, 0.1);
        align-items: center;
    }
    .viewBtnRole {
        display: flex;
        align-items: center;
    }
    .styleContentRole {
        color: #000;
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.16px;
    }
    .styleRole {
        color: #000;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.16px;
    }
    .btnSend {
        border: 2px solid #069;
        background: #069;
        margin-left: 16px;
    }
    .btnSend:hover {
        border: 2px solid #069;
        background: #069 !important;
    }
    .btnEdit {
        border-radius: 6px;
        border: 2px solid #069;
        background: #fff;
        color: #069;
    }
    .btnEdit:hover {
        border-radius: 6px;
        border: 2px solid #069 !important;
        background: #fff !important;
        color: #069 !important;
    }
    .editTitleHeader {
        padding: 10px;
        display: inline-flex;
        align-items: center;
        border: 2px solid #12B897;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        .headerPage {
            padding: 20px 40px 20px 40px;
            display: flex;
            align-items: center;
        }
        .logoHeader {
            display: flex;
            align-items: center;
        }
        .LogoIMG {
            width: 150px;
        }
        .viewPromotion {
            height: 46px;
        }
        .headerTitle {
            padding: 20px 40px 20px 40px;
        }
        .titleHeader {
            font-size: 29px;
        }
        .titleview {
            font-size: 29px;
        }
        .viewShowInfor {
            padding: 20px 40px 20px 40px;
        }
        .viewInforLeft {
            width: 62%;
        }
        .viewInforRight {
            width: 36%;
        }
    }
    @media screen and (max-width: 430px) {
        .mobileView {
            display: flex;
        }
        .deskTopView {
            display: none;
        }
    }
`;
export default QuoteDetailPageStyle;
