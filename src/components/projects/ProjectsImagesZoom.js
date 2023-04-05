import React, { useState } from "react";
import data from '../../data/projectsZoom.json'
import Modal from "../modal/Modal";
import '../../styles/Zoom.css'
import { t } from "i18next";

function ProjectsImagesZoom() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.data[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.data[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.data.filter((item) => {
      return data.data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="underline flex justify-center items-center " >
        <span className="font-bold text-2xl mt-8">
         {
          t(' QALAREYA')
         }
         
          </span>
    </div>
    <div  className="wrapper  grid grid-cols-4 grid-rows-3  gap-8 max-w-[80%] mt-[2rem] mx-auto max-xl:grid-cols-3  max-lg:grid-cols-2 max-lg:max-w-[90%] max-md:grid-cols-1 max-md:max-w-[85%]" >
      
      {data.data.map((item, index) => (
        <div key={index} className="wrapper-images modal-images ">
          <img
            src={item.link}
            alt={item.text}
            onClick={() => handleClick(item, index)}
          />
          <h2>{item.text}</h2>
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
    </>
  );
}

export default ProjectsImagesZoom;
