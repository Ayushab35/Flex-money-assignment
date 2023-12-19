import React, { useEffect, useState } from 'react';
import "../styles/carousel.css";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const boxes = document.querySelectorAll(".box");

    function updateCurrentImg() {
      setIsTransitioning(true);

      boxes.forEach((box, index) => {
        const isActive = index === activeIndex;
        box.classList.toggle("expanded", isActive);
        box.classList.toggle("closed", !isActive);
      });

      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }

    function handleArrowKey(event) {
      if (isTransitioning) {
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((prevIndex) => (prevIndex + 1) % boxes.length);
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prevIndex) => (prevIndex - 1 + boxes.length) % boxes.length);
      }

      updateCurrentImg();
    }

    function handleBoxClick(index) {
      if (isTransitioning) {
        return;
      }

      if (index === activeIndex && boxes[index].classList.contains("expanded")) {
        boxes.forEach((box) => box.classList.remove("closed", "expanded"));
        setActiveIndex(0);
      } else {
        setActiveIndex(index);
        updateCurrentImg();
      }
    }

    document.addEventListener("keydown", handleArrowKey);
    updateCurrentImg();

    boxes.forEach((box, index) => {
      box.addEventListener("click", () => handleBoxClick(index));
    });

    return () => {
      document.removeEventListener("keydown", handleArrowKey);

      boxes.forEach((box, index) => {
        box.removeEventListener("click", () => handleBoxClick(index));
      });
    };
  }, [activeIndex, isTransitioning]);

  return (
    <div className='carousel'>
      <div className="box-container">
        <div className="box">
          <div className="overlay"></div>
        </div>
        <div className="box">
          <div className="overlay"></div>
        </div>
        <div className="box">
          <div className="overlay"></div>
        </div>
        <div className="box">
          <div className="overlay"></div>
        </div>
        <div className="box">
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
