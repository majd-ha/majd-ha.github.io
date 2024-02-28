import React from "react";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { LuBadgeInfo } from "react-icons/lu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DetailsCard from "./DetailsCard";
export default function ProjectCard({
  imgsrc,
  desc,
  link,
  title,
  completed,
  id,
  technologies,
  gitlink,
}) {
  return (
    <div className="card w-80 border border-red-500 text-white   shadow-inner shadow-[#F7F] h-full  mx-2 hover:animate-gradrollbl  transition-all duration-500">
      <div className="card-body p-4">
        <figure>
          {" "}
          <LazyLoadImage
            alt="project img"
            src={imgsrc}
            effect="blur"
            className="rounded-xl object-cover "
          />
          {/* <img
            src={`http://127.0.0.1:3001/images/${imgsrc}`}
            alt=""
            loading="lazy"
            className="rounded-xl object-cover "
          /> */}
        </figure>

        <p className="card-title justify-center">{title}</p>

        <div className="flex items-center justify-between px-5 card-actions">
          <a href={link} className="cursor-pointer btn-ghost " target="_blank">
            <FaEye size={"1.5rem"} />
          </a>
          <div className="">
            <label htmlFor={`my_modal_6_${id}`} className="btn btn-ghost">
              <LuBadgeInfo size={"1.5rem"} className="text-white" />
            </label>

            <input
              type="checkbox"
              id={`my_modal_6_${id}`}
              className="modal-toggle"
            />
            <div className="modal text-black" role="dialog">
              <div className="modal-box max-w-[80%]">
                <p className="w-full p-2 bg-white text-center text-3xl">
                  {title}
                </p>
                <div className="h-[400px] overflow-y-scroll">
                  <DetailsCard
                    imgsrc={imgsrc}
                    link={link}
                    desc={desc}
                    gitlink={gitlink}
                    completed={completed}
                    technologies={technologies}
                  />
                </div>

                <div className="modal-action">
                  <label
                    htmlFor={`my_modal_6_${id}`}
                    className="btn  btn-circle  btn-ghost absolute right-2 top-2"
                  >
                    <IoCloseCircleOutline
                      size={"2.5rem"}
                      className="text-[#F97316]"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <a
            href={gitlink}
            className=" btn-ghost cursor-pointer"
            target="_blank"
          >
            {" "}
            <FaCode size={"1.5rem"} />
          </a>
        </div>
      </div>
    </div>
  );
}
