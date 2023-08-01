import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as HiIcons from "react-icons/hi";
import * as FiIcons from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {AiOutlinePieChart} from 'react-icons/ai'

const LeftPane = () => {
    console.log(location.pathname)
  const tabs = [
    { label: "Dashboard", link: "/", icons: <MdIcons.MdOutlineDashboard /> },
    { label: "Orders", link: "/orders", icons: <BsIcons.BsBag /> , badge:3},
    {
      label: "Customers",
      link: "/customers",
      icons: <HiIcons.HiOutlineUsers />,
    },
    { label: "Inventory", link: "/invetory", icons: <FiIcons.FiFolderMinus /> },
    {
      label: "Conversation",
      link: "/message",
      icons: <FaIcons.FaRegCommentDots />,
      badge:16
    },
    { label: "Settings", link: "/settings", icons: <FiIcons.FiSettings /> },
    // {label:"Contact Support", link:"/support",icons:<BsIcons.BsBag/>},
    // {label:"Free GiftAwaits You!", link:"/settings",icons:<FiIcons.FiGift/>},
    // {label:"Upgrade your account", link:"/settings",icons:<MdIcons.MdOutlineKeyboardArrowRight/>},
    // {label:"Logout", link:"/settings",icons:<BsIcons.BsBoxArrowRight/>},
  ];

  const normal =
    `text-[#53545C] rounded-lg flex items-center gap-1 w-full cursor-pointer  py-2 px-2 flex  font-semibold hover:bg-[#5570F1] my-1 `;
  const active =
    ` bg-[#5570F1] rounded-lg flex items-center gap-1 w-full cursor-pointer px-2 flex py-2 my-1 font-semibold hover:text-white  text-white `;
  return (
    <div className="h-full bg-[#FFF] w-14 md:w-56 py-4 px-2 md:px-4">
        <div className="flex items-center gap-2">
        <AiOutlinePieChart className="text-blue-500 h-6 w-6 "/>
        <span className="font-bold hidden md:flex md:text-md lg:text-sm">Metrix</span>

        </div>
      <div className="mt-8 flex flex-col items-center w-full">
        {tabs.map((tab) => {
          return (
            <NavLink
              key={tab.label}
              to={tab.link}
              className={({ isActive }) => (isActive ? active : normal)}
            >
              <span className={` sm:flex text-lg `}>
                {" "}
                {tab.icons}{" "}
              </span>
              <span className={`hidden sm:flex text-sm `}>
              {" "}
                {tab.label}{" "}
              </span>
              {/* <span className="text-[8px] bg-[#FFCC91] rounded-full w-4 h-4 text-center p-[1px]">{tab.badge}</span> */}
              {tab.badge && ( 
              <span className="text-[8px] bg-[#FFCC91] rounded-full w-4 h-4 text-center p-[1px]">
                {tab.badge}
              </span>
            )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default LeftPane;
