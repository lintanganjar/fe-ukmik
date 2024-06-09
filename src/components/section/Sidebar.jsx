import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "../icons/DashboardIcon";
import RoleIcon from "../icons/RoleIcon";
import UsersIcon from "../icons/UsersIcon";
import ProkerIcon from "../icons/ProkerIcon";
import DocsIcon from "../icons/DocsIcon";
import AlumniIcon from "../icons/AlumniIcon";
import SettingsIcon from "../icons/SettingsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import ChevronDownIcon from "../icons/ChevronDownIcon";
import { useAuthStore } from "@/stores/useAuthStore";

const Sidebar = () => {
  const [openItems, setOpenItems] = useState({});
  const [dropdownOpacity, setDropdownOpacity] = useState({});
  const location = useLocation();
  const currentPathname = location.pathname;
  const { doLogout } = useAuthStore();

  const toggleDropdown = (item) => {
    setOpenItems({
      ...openItems,
      [item.label]: !openItems[item.label],
    });
  };

  useEffect(() => {
    const timeoutIds = {};
    Object.keys(openItems).forEach((key) => {
      timeoutIds[key] = setTimeout(() => {
        setDropdownOpacity((prevOpacity) => ({
          ...prevOpacity,
          [key]: openItems[key] ? "opacity-1" : "opacity-0",
        }));
      }, 100);
    });

    return () => {
      Object.values(timeoutIds).forEach(clearTimeout);
    };
  }, [openItems]);

  const navItems = [
    {
      label: "Dashboard",
      icon: DashboardIcon,
      link: "/dashboard",
    },
    {
      label: "Role",
      icon: RoleIcon,
      link: "/role",
    },
    {
      label: "Users",
      icon: UsersIcon,
      link: "/users",
      subitems: [
        {
          label: "Anggota Tetap",
          link: "/users",
        },
        {
          label: "Calon Anggota",
          link: "/users",
        },
      ],
    },
    {
      label: "Proker",
      icon: ProkerIcon,
      link: "/proker",
    },
    {
      label: "Docs",
      icon: DocsIcon,
      link: "/docs",
    },
    {
      label: "Alumni",
      icon: AlumniIcon,
      link: "/alumni",
    },
    {
      label: "Settings",
      icon: SettingsIcon,
      link: "/settings",
    },
    {
      label: "Log Out",
      icon: LogoutIcon,
      link: "/logout",
      action: () => doLogout(),
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-[183px] fixed bg-[#F4F4F5] h-screen py-6 px-4">
      <div className="flex justify-center gap-2 items-end">
        <img src="/logo_ukmik.svg" height={50} width={50} alt="Logo UKMIK" />
        <h1 className="text-primary-4 font-semibold mb-2 text-xl">ukmik</h1>
      </div>

      <ul className="flex flex-col pt-4 space-y-1">
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`px-4 py-2 rounded-md text-gray-700 hover:text-gray-900 
            ${!item.subitems && "hover:bg-primary-8"} ${
              currentPathname.split("/")[1].includes(item.link.split("/")[1]) &&
              "bg-primary-8"
            } ${window.location.href.startsWith(item.link) ? "active" : ""}`}
            onClick={() => toggleDropdown(item)}
          >
            {item.subitems ? (
              <div className="relative">
                <button
                  className={`flex justify-between rounded-md w-full items-center text-sm font-medium ${
                    openItems[item.label] && ` text-gray-900`
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <item.icon />
                    {item.label}
                  </div>
                  <ChevronDownIcon fill="#71717A" />
                </button>
                {openItems[item.label] && (
                  <ul
                    className={`sub-menu ${
                      dropdownOpacity[item.label] || "opacity-0"
                    } ${
                      openItems[item.label] ? "block" : "hidden"
                    } text-gray-700 pt-2 transition-opacity duration-300 ease-in-out ${
                      openItems[item.label] ? "max-h-[200px]" : "max-h-0"
                    }`}
                  >
                    {item.subitems.map((subitem) => (
                      <li
                        key={subitem.label}
                        className="pl-4 py-1 rounded-md text-xs transition-all duration-300 hover:text-gray-900 hover:bg-white hover:shadow-md"
                      >
                        <Link to={subitem.link}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              item.action ? 
              <button onClick={item.action} className="flex bg-none items-center text-sm font-medium gap-2 ">
                <item.icon />
                {item.label}
              </button> :<Link to={item.link}>
                <button className="flex bg-none items-center text-sm font-medium gap-2 ">
                  <item.icon />
                  {item.label}
                </button>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
