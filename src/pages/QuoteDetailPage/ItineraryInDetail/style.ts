import styled from '@emotion/styled';
import { all } from 'redux-saga/effects';

const ItineraryInDetailStyle = styled('div')`
    width: 100%;
    position: relative;
    bottom: 45px;
    .hotelAndGoflView {
        border-radius: 4px;
        background: #fff;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
        padding: 24px;
        display: flex;
        justify-content: space-between;
        margin-top: 20x;
        margin-bottom: 27x;
    }
    .imgHotelOrGofl {
        width: 171px;
        height: 171px;
        gap: 16px;
        border-radius: 6px;
    }
    .titleItem {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 12px;
    }
    .addressHotelOrGolf {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 16px;
        font-weight: 500;
    }
    .contentInfor {
        color: #000;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 14px;
        margin-top: 15px;
    }
    .discriptHotel {
        color: #4f4f4f;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.16px;
    }
    .iconHotelorGolf {
        width: 22px;
        height: 22px;
    }
    .iconAndBtnItem {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
    }
    .btnSeeDetail {
        color: #1a91ff;
        text-align: right;
        font-feature-settings: 'liga' off, 'clig' off;
        font-size: 16px;
        font-weight: 700;
        text-decoration-line: underline;
        cursor: pointer;
    }
    .titleDay1 {
        color: #000;
        font-size: 24px;
        font-weight: 900;
        line-height: 45.302px;
    }
    .reviewSeller {
        display: flex;
        padding: 34px 111px 34px 111px;
        align-items: center;
        gap: 83px;
        border-radius: 4px;
        background: #f0fffe;
        margin-top: 27px;
        margin-bottom: 27px;
        box-shadow: 4px 4px 20px 0px rgba(156, 171, 194, 0.4);
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
`;
export default ItineraryInDetailStyle;
