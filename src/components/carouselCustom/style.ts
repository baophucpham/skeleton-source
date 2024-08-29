import styled from '@emotion/styled';

const CarouselStyle = styled('div')`
    position: relative;
    overflow: hidden;
    width: 100%;
    margin: auto;
    .carousel-content {
        display: flex;
        transition: transform 0.5s ease-in-out;
    }

    .carousel-item {
        /* min-width: 100%;
        transition: opacity 0.5s ease-in-out; */
        transition: transform 0.5s ease-in-out;
    }

    .prev-button,
    .next-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
    }

    .prev-button {
        left: 10px;
    }

    .next-button {
        right: 10px;
    }
`;

export default CarouselStyle;
