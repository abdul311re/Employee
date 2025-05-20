import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faHouse,
  faChartBar,
  faUserCheck,
  faMoneyCheckAlt,
  faStar,
  faFileAlt,
  faUserPlus,
  faBell,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("true");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "DASHBOARED", icon: faHouse , path:"/"},
    { name: "CHAT", icon: faUser, path:"/Employees" },
    { name: "PROJECTS", icon: faChartBar, path:"/Sales" },
    { name: "TIMESHEET & LEAVE", icon: faUserCheck },
    { name: "TASKS", icon: faMoneyCheckAlt },
    { name: "SUPPORT", icon: faStar },
    { name: "LEADS", icon: faFileAlt },
    { name: "Calender", icon: faUserPlus },
  ];

  return (
    <div className={`h-full bg-black rounded-lg shadow-lg transition-all ${isOpen ? "w-60" : "w-16"} duration-300 `}>
      {/* Toggle Button */}
      <button
        className={`p-3 text-gray-700  w-full flex ${isOpen ? "justify-end pr-4 " : "justify-center"}`}
        onClick={() => setIsOpen(!isOpen)} 
      >
       {isOpen ? (
  <FontAwesomeIcon icon={faTimes} className="text-white cursor-pointer" />
) : (
  <FontAwesomeIcon icon={faBars} className="text-white cursor-pointer" />
)}
      </button>

      {/* Sidebar Menu */}
      <div className="px-2 pb-5">
        {menuItems.map((item, index) => (
               <Link to={item.path} >
          <div
            key={index}
            className={`border-b border-gray-300 p-3 my-3 flex items-center gap-3 cursor-pointer transition-all  ${
              activeItem === item.name
                ? "bg-gradient-to-r from-[#F54B64] to-[#F78361] text-white "
                : "text-white hover:bg-gradient-to-r from-[#F54B64] to-[#F78361]  text-xs"
            }`}
            onClick={() => setActiveItem(item.name)}
          >
            <div className="w-6 flex justify-center">
              <FontAwesomeIcon icon={item.icon} fontSize={"17px"}  />
            </div>
            <span className={`${isOpen ? "block" : "hidden"} transition-all duration-300`}>{item.name}</span>
          </div></Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
