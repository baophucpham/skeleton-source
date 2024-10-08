import styled from '@emotion/styled';

const IntroductionGoflTravelStyle = styled('div')`
    width: 100%;
    .viewMainImage{
        width: 100%;
        height: 413px;
        margin-bottom: 23px;
    }
    .imgGoflTravel {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
    }
    .discriptionGoflTravel {
        width: 100%;
        border-radius: 8px;
        border: 1px solid #dcdcdc;
        background: #fff;
        padding: 39px 35px 39px 35px;
        font-size: 16.071px;
        font-weight: 400;
        line-height: 20px;
        color: #4f4f4f;
        margin-bottom: 37px;
    }
    .content {
        width: 62%;
    }
    .signIn {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .inforSeller {
        text-align: right;
        font-size: 14.062px;
        font-style: normal;
        font-weight: 900;
        line-height: 20.391px;
    }
    .mailSeller {
        text-decoration-line: underline;
        color: #12b897;
    }
    .viewWhyContent {
        width: 100%;
    }
    .titleWhyContent {
        font-size: 23.758px;
        font-style: normal;
        font-weight: 700;
        line-height: 28.125px;
        margin-bottom: 23px;
    }
    .showItemWhy {
        display: flex;
        margin-top: 35px;
        justify-content: space-between;
        padding-bottom: 42px;
        border-bottom: 1px solid #dcdcdc;
    }
    .groupWhyItem {
        width: 20%;
    }
    .iconWhy {
        margin-bottom: 17px;
    }
    .titleItem {
        font-size: 16.071px;
        font-weight: 700;
        line-height: 22.098px;
        color: #4f4f4f;
    }
    .discriptionItem {
        font-size: 16.071px;
        font-weight: 400;
        line-height: 22.098px;
        color: #4f4f4f;
    }
    .slick-arrow .slick-next {
        width: 32.987px !important;
        height: 34.152px !important;
    }
    .carouselView {
        margin-top: 23px;
        border-bottom: 1px solid #dcdcdc;
        padding-bottom: 48px;
    }
    .showItemStep {
        display: flex;
        margin-top: 35px;
        justify-content: space-between;
        padding-bottom: 42px;
    }
    .endView {
        margin-top: 23px;
        padding-bottom: 48px;
    }
    .nameSeller {
        color: #12b897;
    }
    .viewItemCarousel {
        padding-left: 20%;
        padding-right: 20%;
    }
    .titleItemCarousel {
        display: flex;
        margin-bottom: 11px;
        align-items: center;
    }
    .pointCarousel {
        border-radius: 4px;
        background: #12b897;
        padding: 5px 10px 5px 10px;
        color: #fff;
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        line-height: 22px;
        margin-right: 13px;
    }
    .commentCarousel {
        color: #000;
        font-size: 16px;
        font-weight: 900;
        line-height: 22px;
    }
    .discriptionCarousel {
        color: var(--Gray-2, #4f4f4f);
        font-size: 16.071px;
        font-weight: 400;
        line-height: 22.098px;
    }
    .SignCarousel {
        font-size: 16.071px;
        font-style: italic;
        font-weight: 700;
        line-height: 22.098px;
    }
    .avatarSeller {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .avatar {
        width: 87.065px;
        height: 89px;
        color: #12b897;
    }
    .avatarSignView {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .commentSeller {
        width: 50%;
        color: #4f4f4f;
        font-size: 16.071px;
        font-weight: 400;
        line-height: 22.098px;
    }
    .signEnd {
        width: 50%;
        text-align: end;
        color: #454545;
        font-size: 14.062px;
        font-weight: 900;
        line-height: 145%;
    }
    .viewEnd {
        display: flex;
    }
    .phone {
        color: #454545;
        font-size: 14.062px;
        font-weight: 900;
        line-height: 20.391px;
    }
    .email {
        color: #12b897;
        font-size: 14.062px;
        font-style: normal;
        font-weight: 900;
        line-height: 20px;
        text-decoration-line: underline;
    }
    .signature {
        font-family: 'The Nautigal', cursive;
        font-size: 44.196px;
        font-weight: 400;
        line-height: 44.196px;
    }
    @media screen and (max-width: 768px) {
        .discriptionGoflTravel {
            padding: 35px 30px 35px 30px;
            font-size: 14px;
        }
        .titleWhyContent {
            font-size: 20px;
        }
        .viewItemCarousel {
            padding-left: 28%;
        }
        .commentSeller {
            width: 40%;
        }
        .signEnd {
            width: 100%;
            text-align: right;
            font-size: 13px;
        }
        .email {
            font-size: 13px;
        }
        .avatarSeller {
            width: 100%;
        }
        .avatarSignView {
            display: flex;
            flex-direction: column;
        }
        .avatar {
            width: 100%;
        }
        .titleItem {
            font-size: 14px;
        }
        .discriptionItem {
            font-size: 12px;
        }
    }
`;

export default IntroductionGoflTravelStyle;
