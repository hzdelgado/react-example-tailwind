import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`flex ${
        open ? "w-72" : "w-16"
      } h-screen p-5 bg-indigo-500 shadow-lg shadow-indigo-500/50 transition-all duration-300`}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <button onClick={() => setOpen(!open)}>
            <Bars3Icon className="w-6 h-6 text-white"/>
          </button>
          <div className="text-xl font-bold text-white"> Sidebar Example</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
