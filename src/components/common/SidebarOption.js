import React, { useState } from "react";

const SidebarOption = ({ collapsed, option }) => {
  const [onHover, setOnHover] = useState(false);
  console.log(option);
  return (
    <div
      className={`flex items-center h-12 transition-all duration-300 ${
        onHover ? "bg-white" : "bg-transparent"
      } rounded-md ${collapsed ? "p-3" : "justify-center"}`}
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <button>
        <option.component
          className={`w-7 h-7 text-white ${
            onHover ? "fill-indigo-500" : "fill-white"
          }`}
        />
      </button>
      <div
        className={` ${collapsed ? "pl-3" : "hidden"} flex-none text-md ${
          onHover ? "text-indigo-500" : "text-slate-300"
        }`}
      >
        {option.title}
      </div>
    </div>
  );
};

export default SidebarOption;
