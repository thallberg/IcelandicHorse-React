import React, { useEffect, useState } from "react";
import { HiArrowCircleDown } from "react-icons/hi";

type HeroImageProps = {
  title: string;
  subtitle: string;
  image: string;
  children?: React.ReactNode;
  showIcon?: boolean;
};

const HeroImage = ({
  title,
  subtitle,
  image,
  children,
  showIcon = true,
}: HeroImageProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt="Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">{title}</h1>
        <p className="text-xl md:text-2xl max-w-2xl text-amber-100">{subtitle}</p>
        {children && (
          <div className="mb-6 w-full flex justify-center mt-12">{children}</div>
        )}{" "}
      </div>

      {showIcon && isVisible && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <HiArrowCircleDown className="size-16 text-amber-50" />
        </div>
      )}
    </header>
  );
};

export default HeroImage;
