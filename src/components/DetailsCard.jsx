import React from "react";

export default function DetailsCard({
  imgsrc,
  desc,
  link,
  completed,
  technologies,
  gitlink,
}) {
  return (
    <div className="w-full max-h-screen p-5">
      <p className="text-red-500">{!completed && "under Development"}</p>
      <div className="italic">
        <p className="font-bold text-[#F97316] inline"> Description :</p>{" "}
        <span>{desc} </span>
      </div>
      <div className=" my-2">
        <p className="font-bold text-[#F97316] inline"> Technologies Used :</p>{" "}
        <span className="font-bold">{technologies} </span>
      </div>

      <div className="my-2">
        <span className="text-[#F97316] font-bold">Visit here </span>
        <a className="text-blue-500 underline" href={link} target="_blank">
          {" "}
          {link}
        </a>
      </div>
      <div className="my-2">
        <span className="text-[#F97316] font-bold">Github Code</span>
        <a className="text-blue-500 underline" href={gitlink} target="_blank">
          {" "}
          {gitlink}
        </a>
      </div>
      <img
        src={imgsrc}
        alt="f"
        loading="lazy"
        className=" block mx-auto object-contain"
      />
    </div>
  );
}
