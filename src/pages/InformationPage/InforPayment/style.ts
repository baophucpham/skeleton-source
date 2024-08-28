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
        padding-top: 16px;
        margin-top: 27px;
        border-top: 1px solid #dcdcdc;
        font-size: 16px;
        line-height: 34.516px;
    }
    .iconPlus {
        cursor: pointer;
    }
    .iconPlus:hover {
        transform: scale(1.05);
    }
    .totalPrice {
        font-size: 18.657px;
        font-weight: 700;
        line-height: 34px;
    }
    .totalDeposit {
        font-size: 16px;
        font-weight: 700;
        line-height: 21.456px;
    }
    .viewPrice {
        display: flex;
        justify-content: space-between;
    }
    .numTotalPrice {
        font-size: 22.389px;
        font-weight: 900;
    }
    .totalDeposit {
        font-size: 16px;
        font-weight: 900;
    }
    .numGroups {
        font-size: 16px;
        font-weight: 900;
    }
    .contentNavigte {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 34px;
        text-decoration-line: underline;
        color: #1a91ff;
        cursor: pointer;
    }
    .contentNavigte:hover {
        transform: scale(1.05);
    }
    .groupsBtn {
        display: flex;
        flex-direction: column;
    }
    .btnDownload {
        color: #12b897;
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        line-height: 17.867px;
        border-radius: 6px;
        border: 2px solid #12b897;
        margin-bottom: 13px;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    .btnDownload:hover{
        color: #12b897 !important;
        border-radius: 6px !important;
        border: 2px solid #12b897 !important;
    }
    .btnShare {
        color: #12b897;
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        line-height: 17.867px;
        border-radius: 6px;
        border: 2px solid #12b897;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    .btnShare{
        color: #12b897 !important;
        border-radius: 6px !important;
        border: 2px solid #12b897 !important;
    }
`;

export default InformationPaymentStyle;
