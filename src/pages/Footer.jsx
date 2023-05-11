import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
export default function Footer() {
  return (
    <div className="w-[100%] p-5 border border-transparent border-t-red-500 ">
      <div className="w-[90%] mx-auto flex justify-around items-center">
        <a href="https://github.com/majd-ha" target="_blank">
          <FaGithub size={"2rem"} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/majd-alfarfour-b34379274/"
          target="_blank"
        >
          <FaLinkedinIn size={"2rem"} color="white" />
        </a>

        <a href="https://wa.me/message/HK4XSD2DDU5BB1" target="_blank">
          <ImWhatsapp size={"2rem"} color="white" />
        </a>
      </div>
    </div>
  );
}
