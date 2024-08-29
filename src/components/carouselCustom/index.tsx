import React, { useState } from 'react';
import CarouselStyle from './style';
import icons from 'src/assets/icon';

interface CarouselProps {
    children: React.ReactNode[];
    itemsToShow?: number;
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsToShow = 1 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalItems = children.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1,
        );
    };

    return (
        <CarouselStyle>
            <div
                className="carousel-content"
                style={{
                    transform: `translateX(-${
                        (currentIndex * 100) / itemsToShow
                    }%)`,
                }}
            >
                {children.map((child: any, index: any) => (
                    <div
                        key={index}
                        className="carousel-item"
                        style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                    >
                        {child}
                    </div>
                ))}
            </div>
            <img
                alt=""
                className="prev-button"
                style={{ fontSize: '32.987px' }}
                src={icons.leftArrow}
                onClick={prevSlide}
            />
            <img
                alt=""
                className="next-button"
                style={{ fontSize: '32.987px' }}
                src={icons.rightArrow}
                onClick={nextSlide}
            />
        </CarouselStyle>
    );
};

export default Carousel;
