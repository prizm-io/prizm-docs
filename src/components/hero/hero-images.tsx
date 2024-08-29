import { cn } from '@site/src/utils/utils'; // Ensure this import path is correct
import { useState, useEffect } from 'react';

export default function HeroImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = ['img/hero-image1.png', 'img/test.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length); // Change index to switch images
    }, 5000); // Interval for switching images

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative justify-center flex w-full px-[12.56rem] pt-[50px]'>
      {heroImages.map((src, index) => (
        <img
          key={index}
          className={cn(
            'absolute w-[808px]  h-auto transition-opacity duration-1000',
            {
              'opacity-100': currentIndex === index,
              'opacity-0': currentIndex !== index,
            }
          )}
          src={src}
          alt={`Hero Image ${index + 1}`}
        />
      ))}
    </div>
  );
}
