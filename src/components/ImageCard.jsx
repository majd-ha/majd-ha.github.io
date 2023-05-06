import React, { useState } from "react";
import { BsIncognito } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import som from "../assets/fotor-ai-20230506211327.jpg";
export default function ImageCard() {
  const [isImg, setIsImg] = useState(false);
  return (
    <div className=" my-10 bg-gray-500 h-96 rounded-lg w-full flex-col items-center mt-40">
      <div
        className="h-2/4 md:w-2/4 max-sm:relative -top-[20px] bg-[#212121] md:bg-transparent max-sm:w-[100%] object-cover  flex  items-center max-sm:justify-center max-sm:bg-clip-content max-sm:rounded-b-full max-sm:shadow-lg "
        onClick={() => {
          setIsImg(!isImg);
        }}
      >
        <div
          className={` facback nm duration-500 ease-linear  md:bg-[#212121] ${
            !isImg ? "" : "flipme"
          }`}
        >
          <BsIncognito size={250} />
        </div>

        <img
          src={som}
          alt=""
          className={`facback nm duration-500 ease-linear md:bg-[#212121]  ${
            isImg ? "" : "flipme"
          }`}
        />
      </div>
      <div>
        {isImg ? (
          <div className="md:flex justify-between">
            <div className="italic px-4">
              <h1 className="text-3xl p-3 mb-5 font-rale text-[#1a0909] ">
                majd alfarfour{" "}
              </h1>
              <p>fullstack web dev</p>
            </div>
            <div className="max-sm:hidden p-5 overflow-hidden">
              <FaGithub size={"5em"} />
            </div>
          </div>
        ) : (
          <div className="p-5">
            <h1> ##### </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              nisi blanditiis impedit. Dolorum doloremque, neque aspernatur,
              omnis ut
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
