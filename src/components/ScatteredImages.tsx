import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 500px;
    height: 300px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100px;
    height: 100px;
    position: absolute;
`;

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
    'image10.jpg',
];

const getRandomPosition = (): { x: number; y: number } => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    return { x, y };
};

const ScatteredImages: React.FC = () => {
    useEffect(() => {
        const imageElements = images.map((src) => {
            const img = new Image();
            img.src = src;
            img.classList.add('image');
            const { x, y } = getRandomPosition();
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            return img;
        });

        const container = document.createElement('div');
        container.classList.add('image-container');
        imageElements.forEach((img) => container.appendChild(img));
        document.body.appendChild(container);

        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return (
        <ImageContainer>
            <Container />
        </ImageContainer>
    );
};

export default ScatteredImages;