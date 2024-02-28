import React, { useState } from "react";
import { IconContext } from "react-icons";
// import { BsIncognito } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import som from "../assets/avatar.jpg";
import Slider from "./Slider";
export default function PopCard({ st, sk }) {
  const [isImg, setIsImg] = useState(false);

  return (
    <div
      className={`mt-5 ${
        sk === null ? "h-[350px] max-sm:h-[340px]" : "h-[500px] "
      } relative w-[100%]  max-sm:smparent bg-green-700 rounded-xl`}
    >
      <div className="md:block  hidden absolute top-8 left-0 w-[100%]">
        <Slider setSkill={st} />
      </div>
      {/*  */}
      <div
        className={`select-none  cursor-pointer transition-all border bg-white absolute top-1 left-5 w-[300px] h-[300px] rounded-full  max-sm:smscircle z-10 overflow-hidden flex justify-center items-center nm duration-500 ease-in-out ${
          isImg ? "" : "flipme"
        }`}
        onClick={() => setIsImg(!isImg)}
      >
        <img
          src={som}
          alt=""
          className="w-[280px] h-[280px] max-sm:w-[240px] max-sm:h-[240px] object-cover rounded-full border block grad"
        />
      </div>
      {/* 2img */}
      <div
        className={`select-none cursor-pointer bg-white absolute top-1 left-5 w-[300px] h-[300px] rounded-full border max-sm:smscircle z-10 overflow-hidden flex justify-center items-center nm duration-500 ease-in-out ${
          isImg ? "flipme" : ""
        }`}
        onClick={() => setIsImg(!isImg)}
      >
        <HiCode className="w-[280px] h-[280px] max-sm:w-[240px] max-sm:h-[240px] object-cover rounded-full border block bg-[#212121]" />
      </div>
      {/* end 2img */}
      {/* content */}
      <div className="absolute bottom-0 left-0 contentheight bg-[#292729] overflow-hidden rounded-xl  w-[100%] max-sm:smcontent max-sm:smcontentheight  p-3">
        <div className="mb-5  ml-[310px] max-sm:ml-0 flex flex-col max-sm:justify-center max-sm:items-center md:w-contentdev max-sm:w-full px-4 md:mb-28">
          <h1 className="font-rale text-3xl max-sm:text-center  capitalize  w-full ">
            majd alfarfour
          </h1>
          <p className="italic">fullstack web dev</p>
        </div>
        <div
          className={`w-full ${
            sk !== null ? "md:border" : ""
          }  border-white rounded-lg flex flex-col max-sm:justify-center max-sm:items-center sm:mt-[100px]`}
        >
          <IconContext.Provider
            value={{
              size: "5em",
              className: "max-sm:w-[3em] md:pt-1",
            }}
          >
            <div className="flex justify-between">
              <h1 className="font-rale text-5xl capitalize p-4 ">{sk?.id}</h1>
              <p className="flex justify-center md:mx-3 pr-4">{sk?.icon}</p>
            </div>

            <p className="p-4 italic mt-2">{sk?.description}</p>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
