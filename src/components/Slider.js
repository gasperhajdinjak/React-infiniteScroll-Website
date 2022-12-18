import { React, useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import img1 from "../Images/male.avif";
import img2 from "../Images/female.avif";
import img3 from "../Images/kid.avif";

function Slider() {
  const images = [img1, img2, img3];
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSliderHandler = index => {
    if (index === 0) {
      setActiveSlide(images.length - 1);
    } else if (index > 1) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  const nextSliderHandler = index => {
    if (index === images.length - 1) {
      setActiveSlide(1);
    } else if (index < images.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(images.length - 1);
    }
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setActiveSlide(oldIndex => {
        let index = oldIndex + 1;
        if (index > images.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [images.length]);

  return (
    <div className='m-6'>
      {images.map((item, index) => {
        return (
          <div
            key={index}
            className={
              activeSlide === index
                ? "flex justify-between items-center"
                : "hidden"
            }>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => prevSliderHandler(index)}>
              <FiChevronLeft />
            </button>
            <div className='slider-img-container'>
              <img src={item} alt='landscape' className='slider-img' />
            </div>
            <button
              className='text-6xl border-2 border-black'
              onClick={() => nextSliderHandler(index)}>
              <FiChevronRight />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
