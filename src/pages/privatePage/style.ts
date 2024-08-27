import styled from '@emotion/styled';

const PrivatePageStyle = styled('div')`
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 768px;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 1024px;
    }
    .title {
        font-size: 16px;
    }
`;
export default PrivatePageStyle;
