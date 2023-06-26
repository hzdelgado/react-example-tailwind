import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex ${
        open ? "w-72" : "w-16"
      } h-screen p-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 transition-all duration-300 rounded-r-lg`}
    >
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <button className="flex-1" onClick={() => setOpen(!open)}>
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
      </div>
    </div>
  );
};

export default Sidebar;
