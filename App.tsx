import { useState } from 'react';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalImages = 19;
  const baseUrl = 'https://teddywchoi.github.io/eerion.app/eerion_app/';

  const handleClick = () => {
    setCurrentIndex((prev) => (prev >= totalImages ? 1 : prev + 1));
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <img
        src={`${baseUrl}${currentIndex}.png`}
        alt={`Image ${currentIndex}`}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
