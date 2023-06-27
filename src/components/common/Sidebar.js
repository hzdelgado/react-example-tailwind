import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { sidebarOptions } from "../../data/Sidebar";
import SidebarOption from "./SidebarOption";
import LogOut from "./LogOut";
import profilePhoto from "../../assets/profile-photo.jpeg";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={` ${
        open ? "w-72" : "w-16"
      } bg-indigo-500 shadow-lg shadow-indigo-500/50 transition-all duration-300`}
    >
      <div className="flex flex-col h-full space-y-10 justify-between">
        <div className={`flex h-1/6 items-center ${open ? "justify-start p-3" : "justify-center p-4"}`}>
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
        <div className={`h-5/6 space-y-3 p-3`}>{sidebarOptions.map((option) => (
          <SidebarOption
            collapsed={open}
            option={option}
          />
        ))}</div>
        <div className={`flex h-1/6 ${
              open ? "" : "p-3"
            } `}><LogOut collapsed={open} photo={profilePhoto}/></div>
      </div>
    </div>
  );
};

export default Sidebar;
