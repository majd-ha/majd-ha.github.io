import React from "react";

export default function ProCard({ imgsrc, desc, link, title, completed }) {
  return (
    <a href={link} target="_blank">
      <div className="p-5 border border-red-500 rounded-2xl min-w-[250px] text-white max-h-[550px] grad overflow-hidden">
        <p
          className={
            !completed
              ? "relative -rotate-45 bg-red-500 w-[100%] italic -left-[6.5rem] max-sm:-left-[5.5rem] max-sm:top-[2.5rem] text-center top-[4rem]"
              : "hidden"
          }
        >
          under dev
        </p>
        <img
          src={`${imgsrc}`}
          alt="loading image"
          width={"100%"}
          height={"80%"}
          style={{ objectFit: "contain" }}
        />
        <p className="bold text-2xl text-center mt-3 italic">{title}</p>
        <p className="w-full p-3 break-words text-center ">{desc}</p>
      </div>
    </a>
  );
}
