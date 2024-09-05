import styled from '@emotion/styled';

const PricingAndBookingStyle = styled('div')`
    width: 100%;
    border-radius: 8px;
    background: #fff;
    /* shadow */
    box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
    padding: 48px 37px 60px 37px;
    display: flex;
    flex-direction: column;
    .areaTitleQuote {
        margin-bottom: 24px;
    }
    .titleQuote {
        color: #1a91ff;
        text-align: center;
        font-size: 18.432px;
        font-weight: 700;
        line-height: 33.016px;
        border-radius: 6.349px;
        border: 2.304px solid #1a91ff;
        padding: 4px 10px 4px 10px;
    }
    .quoteReferent {
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: 29px;
    }
    .headerGroup {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }
    .fullNameGroup {
        display: flex;
    }
    .firstNameGroup {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        line-height: 37px;
        margin-right: 7px;
    }
    .lastNameGroup {
        color: #000;
        font-size: 20px;
        font-weight: 400;
        line-height: 37px;
    }
    .priceGroup {
        color: #454545;
        text-align: right;
        font-size: 20px;
        font-weight: 900;
        line-height: 24px;
    }
    .contentInfor {
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 32px;
        display: flex;
        align-items: center;
    }
    .bodyGroup {
        padding-left: 60px;
        padding-right: 60px;
    }
    .iconOfGroup {
        width: 5%;
        color: #12b897;
    }
    .areaGroup {
        margin-bottom: 24px;
    }
    .areaEnd {
        width: 100%;
        border-top: 1px solid #dcdcdc;
        padding: 21px 0px 0px 0px;
    }
    .viewTotalPrice {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }
    .contentTotalPrice {
        color: #000;
        font-size: 18.657px;
        font-weight: 700;
        line-height: 21.456px;
    }
    .priceTotal {
        color: #454545;
        text-align: right;
        font-size: 22.389px;
        font-weight: 900;
        line-height: 22.389px;
    }
    .contentTotalDeposit {
        color: #000;
        font-size: 16px;
        font-weight: 700;
        line-height: 21.456px;
    }
    .priceDeposit {
        color: #454545;
        text-align: right;
        font-size: 16px;
        font-weight: 900;
        line-height: 22.389px;
    }
    .areaChoosen {
        width: 100%;
        padding: 54px 64px 84px 64px;
        background: #f0fffe;
        margin-bottom: 40px;
    }
    .titleAreaChoosen {
        color: #000;
        font-size: 24px;
        font-weight: 900;
        line-height: 28px;
        margin-bottom: 14px;
    }
    .contentAreaChoosen {
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        margin-bottom: 34px;
    }
    .btnEnd {
        width: 100%;
        background: #12b897;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 17.121px;
        font-weight: 900;
        line-height: 15.295px;
        border-radius: 6px;
        padding: 20px 0px 20px 20px;
        cursor: pointer;
    }
    .btnEnd:hover {
        transform: scale(1.005);
    }
    .imageGoftLogo{
        width: 60%;
    }
    .areaLogo{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
export default PricingAndBookingStyle;
