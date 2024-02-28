import React from "react";
import { FaImage } from "react-icons/fa6";
export default function SkeletonCard() {
  return (
    <div className="card w-80 border shadow-xl h-full flex-1 flex-wrap  m-2 animate-pulse text-white">
      <div className="card-body p-4">
        <div className="w-full h-[80%] flex justify-center items-center bg-gray-400">
          <FaImage size={"10.5rem"} className="text-gray-500 opacity-40 " />
        </div>

        <p className="card-title justify-center w-10 h-5 animate-pulse rounded-xl bg-gray-400"></p>

        <div className="flex items-center justify-between mt-5 card-actions">
          <p className="w-[0.5rem] h-[1.2rem] animate-pulse bg-gray-400 rounded-xl"></p>
          <p className="w-[0.5rem] h-[1.2rem] animate-pulse bg-gray-400 rounded-xl"></p>
        </div>
      </div>
    </div>
  );
}
