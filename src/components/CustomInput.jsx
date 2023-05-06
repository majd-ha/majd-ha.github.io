import React from "react";

export default function CustomInput({ type, icon, name, placeholder }) {
  return (
    <div className="w-[90%] h-[35%] relative  ">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        className="absolute w-[100%] border-none top-1/2 -translate-y-[50%] h-[90%] rounded-xl outline-none indent-3   text-gray-700"
      />
      <p className="absolute top-1/2 -translate-y-[50%] right-[1%]">{icon}</p>
    </div>
  );
}
