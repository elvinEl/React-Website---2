import React from "react";
import ScrollToTop from "react-scroll-to-top";

function ScrollTo() {
  return (
    <>
      <button className="fixed">
        <ScrollToTop color="white" className="max-md:w-[45px] max-md:h-[45px]" smooth />
      </button>
    </>
  );
}

export default ScrollTo;
