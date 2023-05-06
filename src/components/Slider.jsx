import React, { useRef } from "react";
import { IconContext } from "react-icons";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiRedux, SiTailwindcss } from "react-icons/si";
export default function Slider({ setSkill }) {
  const scrollRef = useRef();

  const iconarray = [
    {
      id: "html",
      description: "experienced ",
      icon: <AiFillHtml5 />,
    },
    {
      id: "css",
      description: "experienced ",
      icon: <DiCss3 />,
    },
    {
      id: "node",
      description: "experienced in JS & good in Node js ",
      icon: <FaNodeJs />,
    },
    {
      id: "mongoDb",
      description: "good knowledge",
      icon: <SiMongodb />,
    },
    {
      id: "redux",
      description: "good knowledge ",
      icon: <SiRedux />,
    },
    {
      id: "tailwind",
      description: "experienced",
      icon: <SiTailwindcss />,
    },
    {
      id: "react",
      description: "experienced",
      icon: <FaReact />,
    },
    {
      id: "github",
      description: "good knowledge  ",
      icon: <FaGithub />,
    },
  ];
  return (
    <div className="w-full flex justify-center h-24">
      <div
        className="w-[80%] overflow-scroll h-28 scroll-smooth max-sm:w-full"
        ref={scrollRef}
      >
        <div className="md:w-[200%] hover:pause  md:animate-slide-1  flex justify-between items-center animate-slide-2 h-full">
          <IconContext.Provider
            value={{
              size: "5em",
              className: "hover:scale-110  cursor-pointer ",
            }}
          >
            {iconarray.map((el) => {
              return (
                <p
                  className="animate-pulse-3  max-sm:mx-24"
                  key={el.id}
                  onClick={() => {
                    setSkill(el);
                  }}
                >
                  {el.icon}
                </p>
              );
            })}
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
