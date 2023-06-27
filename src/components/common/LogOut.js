import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
import React from "react";

const LogOut = ({ collapsed, photo }) => {
  return !collapsed ? (
    <img src={photo} className="rounded-full w-10 h-10" />
  ) : (
    <div className="grid grid-cols-4 grid-rows-2 grid-flow-col place-items-start w-full bg-indigo-400 p-5 gap-4">
      <img src={photo} className="rounded-full w-14 h-14 row-span-2" />
      <div className="col-span-2 place-self-end text-white underline underline-offset-1">
        Stephano Milani
      </div>
      <div className="col-span-2 text-gray-300 text-sm">Developer</div>
      <ArrowRightOnRectangleIcon className="w-7 h-7 text-white row-span-2 place-self-center" />
    </div>
  );
};

export default LogOut;
