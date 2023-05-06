import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import PopCard from "../components/PopCard";
import Slider from "../components/Slider";

export default function Home() {
  const [skill, setSkill] = useState({
    id: "react",
    description: "experienced",
    icon: <FaReact />,
  });
  return (
    <div className="w-desk text-white mt-10 h-screen">
      <div id="home" className="mt-10 pt-10">
        <PopCard st={setSkill} sk={skill} />
      </div>

      <div className="md:hidden">
        <Slider setSkill={setSkill} />
      </div>
    </div>
  );
}
