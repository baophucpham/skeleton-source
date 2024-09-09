import styled from '@emotion/styled';

const QuoteDetailPageStyle = styled('div')`
    display: flex;
    flex-direction: column;
    background: #f2f2f2;

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
        color: #0a987c;
        font-size: 21.333px;
        font-style: normal;
        font-weight: 900;
        line-height: 32.753px;
        border-radius: 6.299px;
        border: 2.286px solid #12b897;
        background: rgba(18, 184, 151, 0.1);
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
`;
export default QuoteDetailPageStyle;
