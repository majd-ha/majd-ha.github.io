import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavUl from "./NavUl.jsx";
export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="grad flex justify-center sticky top-0 z-20">
      <div className="w-[80%] flex justify-between items-center h-20">
        <h1 className="text-4xl font-sig text-white uppercase select-none ">
          majd
        </h1>
        <NavUl
          ulcn={"hidden md:flex gap-5 justify-evenly"}
          licn={"navel "}
          setactiv={setShow}
        />
        <div className="md:hidden cursor-pointer">
          <div
            onClick={() => setShow(!show)}
            className="absolute z-10 right-2 top-6 "
          >
            {show ? (
              <FaTimes size={30} className="text-white select-none" />
            ) : (
              <FaBars size={30} className="text-white select-none" />
            )}
          </div>
          {show && (
            <NavUl
              ulcn={" ulcol"}
              licn={" text-white text-4xl  py-5"}
              setactiv={setShow}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
