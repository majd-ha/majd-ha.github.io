import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import CustomInput from "../components/CustomInput";
export default function Contact() {
  return (
    <div className="h-screen w-desk mt-4 text-white" id="contact">
      <h1 className="heading">contact us</h1>
      <form
        className="  h-[350px] flex flex-col items-center p-5 gap-5"
        action="https://getform.io/f/6a99fdd4-41a1-4746-80be-46e838b2bd4c"
        method="POST"
      >
        <CustomInput
          placeholder={"your name "}
          name={"name"}
          type={"text"}
          icon={<BsFillPersonFill size={"2rem"} color="gray" />}
        />
        <CustomInput
          placeholder={"your email"}
          name={"email"}
          type={"text"}
          icon={<MdEmail size={"2rem"} color="gray" />}
        />
        <textarea
          placeholder="your message"
          name="message"
          rows="10"
          className="text-gray-600 p-2 rounded-lg w-[90%] outline-none"
        ></textarea>
        <button className="shadow-lg w-[25%] h-[38%] rounded-full text-center flex justify-center items-center gap-3 border border-green-500">
          {/* <p className="italic font-rale"> send</p>{" "} */}
          <IoMdSend size={"2rem"} color="green" />
        </button>
      </form>
    </div>
  );
}
