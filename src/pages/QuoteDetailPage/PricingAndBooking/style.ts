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
    .areaTitleQuote{
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
    .headerGroup{
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
    }
    .fullNameGroup{
        display: flex;
    }
`;
export default PricingAndBookingStyle;
