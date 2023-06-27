import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { sidebarOptions } from "../../data/Sidebar";
import SidebarOption from "./SidebarOption";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex ${
        open ? "w-72 p-4" : "w-16 p-3"
      } h-screen bg-indigo-500 shadow-lg shadow-indigo-500/50 transition-all duration-300`}
    >
      <div className="flex-col grow space-y-10">
        <div className={`flex items-center ${open ? "justify-start" : "justify-center"}`}>
          <button onClick={() => setOpen(!open)}>
            <Bars3Icon className="w-7 h-7 text-white" />
          </button>
          <div
            className={` ${
              open ? "pl-3" : "hidden"
            } flex-none text-xl font-bold text-white`}
          >
            {" "}
            Sidebar Example
          </div>
        </div>
        <div className="space-y-3">{sidebarOptions.map((option) => (
          <SidebarOption
            collapsed={open}
            option={option}
          />
        ))}</div>
      </div>
    </div>
  );
};

export default Sidebar;
