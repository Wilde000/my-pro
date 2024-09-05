import { useState } from "react";
import SidebarList from "./SidebarList";
import SidebarIcons from "./SidebarIcons";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    
      <div className="h-screen mt-[150px] flex ">
        <div
          className={`transition-all duration-300 ease-in-out ${
            isNavOpen ? "w-[200px]" : "w-[50px]"
          }
              bg-[#2C517E] p-0.5 flex flex-col items-center`}
        >
          <button
            className="text-2xl cursor-pointer bg-[#2C517E] p-2 mt-2"
            onClick={toggleNav}
          >
            {isNavOpen ? (
              <ArrowLongLeftIcon className="text-white cursor-pointer w-6 h-6" />
            ) : (
              <ArrowLongRightIcon className="text-white cursor-pointer w-6 h-6" />
            )}
          </button>
          {isNavOpen ? <SidebarList /> : <SidebarIcons className="w-6 h-6" />}
        </div>
      </div>
    
  );
};

export default Sidebar;
