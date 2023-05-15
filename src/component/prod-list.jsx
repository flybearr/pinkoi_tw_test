import "../style/prodList.scss";
import { useState } from "react";
import img from "/slider_img/1668171608_vhSbE5_1152x648.jpg";
import { v4 as uuidv4 } from "uuid";
export default function ProdList() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + max);
  }
  const [selList, setSelList] = useState(0);
  const handler = (type) => {
    if (type === "prev") {
      if (selList === 0) {
        setSelList(2);
      } else {
        setSelList(selList - 1);
      }
    } else {
      if (selList === 2) {
        setSelList(0);
      } else {
        setSelList(selList + 1);
      }
    }
  };
  return (
    <div className="w-full prod-list px-12 relative">
      <div className="flex justify-between items-center px-2">
        <h2>編輯嚴選</h2>
        <span className="text-xs">{selList + 1} / 3 </span>
      </div>

      <div className=" relative">
        <div
          onClick={() => {
            handler("prev");
          }}
          className="absolute top-16 -left-3 flex justify-center items-center w-8 h-8 bg-white/80 rounded-full shadow hover:scale-150  active:bg-gray-300 z-20"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>
        <div
          onClick={() => {
            handler("next");
          }}
          className="absolute top-16 -right-3 flex justify-center items-center w-8 h-8 bg-white/80 rounded-full shadow hover:scale-150 active:bg-gray-300 z-10"
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>

        <div className="view-wrap w-full  overflow-hidden ">
          <div
            className="scroll-list flex relative z-0"
            style={{ transform: `translateX(-${(selList / 3) * 100}%)` }}
          >
            <ul className="w-1/3 flex justify-around px-1 ">
              {Array(6)
                .fill(1)
                .map((v, i) => {
                  return (
                    <li key={uuidv4} className="w-full  mx-1 ">
                      <div className="w-full ">
                        <img
                          className="w-full object-cover h-40"
                          src={"https://picsum.photos/250/250"}
                          alt="1"
                        />
                      </div>
                      <p>loerm title</p>
                      <span>author {uuidv4()}</span>
                      <p>NT ${getRandomInt(999, 6000)}</p>
                    </li>
                  );
                })}
            </ul>
            <ul className="w-1/3 flex justify-around px-1 ">
              {Array(6)
                .fill(1)
                .map((v, i) => {
                  return (
                    <li key={uuidv4 + 10} className="w-full  mx-1 ">
                      <div className="w-full ">
                        <img
                          className="w-full object-cover h-40"
                          src={img}
                          alt="1"
                        />
                      </div>
                      <p>loerm title</p>
                      <span>author {uuidv4()}</span>
                      <p>NT ${getRandomInt(999, 6000)}</p>
                    </li>
                  );
                })}
            </ul>
            <ul className="w-1/3 flex justify-around px-1 ">
              {Array(6)
                .fill(1)
                .map((v, i) => {
                  return (
                    <li key={uuidv4 + 1} className="w-full  mx-1 ">
                      <div className="w-full ">
                        <img
                          className="w-full object-cover h-40"
                          src={"https://picsum.photos/250/250"}
                          alt="1"
                        />
                      </div>
                      <p>loerm title</p>
                      <span>author {uuidv4()}</span>
                      <p>NT ${getRandomInt(999, 6000)}</p>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
