import styled from '@emotion/styled';

const InformationPaymentStyle = styled('div')`
    width: 100%;

    .inforSeller {
        background-color: #ffffff;
        flex-shrink: 0;
        border-radius: 8px;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        padding: 17px 20px 17px 20px;
        margin-bottom: 20px;
    }
    .viewinforSeller {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .contentSeller {
        width: 50%;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.2px;
    }
    .avatarSeller {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .avatar {
        width: 87.065px;
        height: 89px;
        color: #12b897;
    }
    .btnPhoneCall {
        width: 100%;
        height: 56px;
        border-radius: 6px;
        background: #12b897;
    }
    .btnPhoneCall:hover {
        background: #12b999 !important;
    }
    .inforPayMent {
        background-color: #ffffff;
        flex-shrink: 0;
        border-radius: 8px;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        padding: 17px 20px 17px 20px;
        margin-bottom: 20px;
    }
    .viewinforPayment {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        line-height: 34.516px;
    }
    .price {
        display: flex;
        justify-content: space-between;
        padding-top: 16px;
        margin-top: 27px;
        border-top: 1px solid #dcdcdc;
        font-size: 16px;
        line-height: 34.516px;
    }
    .iconPlus {
        cursor: pointer;
    }
`;
export default InformationPaymentStyle;
