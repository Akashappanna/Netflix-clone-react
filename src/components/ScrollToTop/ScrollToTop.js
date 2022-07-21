import React, { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   window.addEventListener("scroll", toggleView);
  //   console.log("apple");

  useEffect(() => {
    window.addEventListener("scroll", toggleView);

    return () => {
      window.removeEventListener("scroll", toggleView);
    };
  }, []);

  return (
    <div
      className="fixed bottom-0 right-0 z-10 hover:scale-150 transition-all duration-700  cursor-pointer p-5"
      onClick={scrollUp}
    >
      {isVisible && (
        <BsArrowUpCircle style={{ fill: "white", fontSize: "30px" }} />
      )}
    </div>
  );
};

export default ScrollToTop;
