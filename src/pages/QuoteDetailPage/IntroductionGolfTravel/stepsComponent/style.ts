import styled from '@emotion/styled';

const StepComponentStyle = styled('div')`
    display: flex;
    margin-top: 35px;
    justify-content: space-between;
    padding-bottom: 42px;
    .nextStepTitle {
        color: #454545;
        font-size: 16.071px;
        font-weight: 700;
        line-height: 22.098px;
    }
    .nextStepDiscription {
        color: #454545;
        font-size: 16.071px;
        font-weight: 400;
        line-height: 22.098px;
        letter-spacing: 0.161px;
    }
    .link {
        color: #1a91ff;
        font-size: 16.071px;
        font-weight: 400;
        line-height: 22.098px;
        letter-spacing: 0.161px;
        text-decoration-line: underline;
        cursor: pointer;
    }
`;

export default StepComponentStyle;
