import img1 from "/slider_img/1668171608_vhSbE5_1152x648.jpg";
import img2 from "/slider_img/1682087919_tBjYHx_1152x648.jpg";
import img3 from "/slider_img/1682558443_qZpnUn_1152x648.jpg";
import img4 from "/slider_img/1683433253_3ghAd8_720x405.jpg";
import img5 from "/slider_img/1683615763_KLH35U_720x405.jpg";

import "../style/slider.scss";
import { useState, useRef, useEffect } from "react";
export default function lider() {
  const sliderList = [img1, img2, img3, img4, img5];
  const [sliderNumber, setSliderNumber] = useState([-2, -1, 0, 1, 2]);
  function useThrottle(cb, time = 500) {
    const isEnableRef = useRef(true);

    return (...args) => {
      if (!isEnableRef.current) {
        return;
      }
      isEnableRef.current = false;

      cb(...args);
      setTimeout(() => {
        isEnableRef.current = true;
      }, time);
    };
  }
  const throttledEvent = useThrottle(setSliderNumber, 580);
  const sliderClickHandler = (type) => {
    throttledEvent(() => {
      let newArr = [...sliderNumber];
      if (type === "prev") {
        const headNum = sliderNumber[0];
        newArr.splice(0, 1);
        newArr.push(headNum);
      } else {
        const lastNum = sliderNumber[sliderNumber.length - 1];
        newArr.splice(4, 1);
        newArr.unshift(lastNum);
      }
      return newArr;
    });
  };
  useEffect(() => {
    const timeSlider = setInterval(() => {
      const newArr = [...sliderNumber];
      const lastNum = sliderNumber[sliderNumber.length - 1];
      newArr.splice(4, 1);
      newArr.unshift(lastNum);
      setSliderNumber(newArr);
    }, 4000);
    return () => {
      clearInterval(timeSlider);
    };
  }, [sliderNumber]);
  return (
    <div className="slider  w-full">
      <div className="slider-list">
        {sliderList.map((v, i) => {
          const otherIndex = sliderNumber[i] === 2 || sliderNumber[i] === -2;
          return (
            <div
              className="slider-img-wrap"
              style={{
                transform: `translateX(${744 * sliderNumber[i]}px`,
              }}
              key={v + i}
            >
              <img
                src={v}
                alt=""
                className=""
                style={{
                  visibility: `${otherIndex ? "hidden" : "visible"}`,
                  // transition: `${otherIndex ? ".3s" : "0s"}`,
                  opacity: `${
                    sliderNumber[i] === 1 || sliderNumber[i] === -1
                      ? "0.2"
                      : "1"
                  }`,
                }}
              />
            </div>
          );
        })}
      </div>

      <div className="btn-l">
        <div
          onClick={() => {
            sliderClickHandler("prev");
          }}
          className="left-icon bg-white/80 shadow hover:scale-150  active:bg-gray-300 "
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
      </div>
      <div className="btn-r">
        <div
          onClick={() => {
            sliderClickHandler("next");
          }}
          className="right-icon  bg-white/80  shadow hover:scale-150 active:bg-gray-300 z-10"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
