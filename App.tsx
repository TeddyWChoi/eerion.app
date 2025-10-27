import { useState } from 'react';

export default function App() {
    const [currentIndex, setCurrentIndex] = useState(1);
    const totalImages = 19;
    const baseUrl = 'https://teddywchoi.github.io/eerion.app/eerion_app/';

    const handleClick = () => {
        setCurrentIndex((prev) => (prev >= totalImages ? 1 : prev + 1));
    };

    return (
        <>
            <img
                src={`${baseUrl}${currentIndex}.png`}
                alt={`Image ${currentIndex}`}
                className="block mobile-image-full"
                onClick={handleClick}
                style={{
                    height: 'auto',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                }}
            />
        </>
    );
}
