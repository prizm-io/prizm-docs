import { cn } from "@site/src/utils/utils";
import { useState, useEffect } from "react";

export default function HeroImages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroImages = ["img/hero-image1.png", "img/test.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative justify-center flex w-full pt-[50px]">
      <img
        className="invisible max-w-[808px] w-full px-4 lg:px-0 h-full"
        src="img/hero-image1.png"
        alt="invisible"
      />
      {heroImages.map((src, index) => (
        <img
          key={index}
          className={cn(
            "absolute max-w-[808px] w-full px-4 lg:px-0 h-auto transition-opacity duration-1000",
            {
              "opacity-100": currentIndex === index,
              "opacity-0": currentIndex !== index,
            }
          )}
          src={src}
          alt={`Hero Image ${index + 1}`}
        />
      ))}
    </div>
  );
}
