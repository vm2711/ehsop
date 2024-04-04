import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = [
    "https://res.cloudinary.com/ddf5elful/image/upload/v1712168832/Cream_Brown_Simple_Special_Offer_Banner_Landscape_2_2_vpig5d.png",
    "https://res.cloudinary.com/ddf5elful/image/upload/v1712168310/Gray_Minimalist_New_Collection_Banner_10_qbet1e.png",
    "https://res.cloudinary.com/ddf5elful/image/upload/v1712169700/Gray_Brown_Full_Photo_Fashion_Sale_Banner_4_pqmdsl.png",
    "https://res.cloudinary.com/ddf5elful/image/upload/v1712173048/Beige_Brown_Minimalist_Casual_Style_Banner_Landscape_1_qeltl5.png",
    "https://res.cloudinary.com/ddf5elful/image/upload/v1712173201/Classy_Fashion_Style_Presentation_2_gorxov.png"
    // Add other image URLs here
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % imageUrls.length;
      setCurrentIndex(nextIndex);
    }, 5000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, imageUrls.length]);

  const handlePrevClick = () => {
    const prevIndex = currentIndex === 0 ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % imageUrls.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="relative w-full">
      <div
        className="relative w-full h-[70vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${imageUrls[currentIndex]})`,
        }}
      >
        {/* <div className={`${styles.section} text-center text-white`}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Best Collection for Men
          </h1>
          <p className="text-base md:text-lg mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            assumenda? Quisquam itaque exercitationem labore vel, dolore quidem
            asperiores, laudantium temporibus soluta optio consequatur aliquam
            deserunt officia. Dolorum saepe nulla provident.
          </p>
          <Link to="/products" className={`${styles.button} inline-block`}>
            Shop Now
          </Link>
        </div> */}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
        onClick={handlePrevClick}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
        onClick={handleNextClick}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Hero;
