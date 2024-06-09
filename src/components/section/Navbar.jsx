import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MobileNavItems from "@/components/section/partials/navbar/MobileNavItems";
import BrowserNavItems from "@/components/section/partials/navbar/BrowserNavItems";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

const Navbar = () => {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);
  const [navItems, setNavItems] = useState([]);
  const [activeNav, setActiveNav] = useState(location.pathname);

  const unauthenticatedNavItems = [
    { name: "Home", href: "/", child: null },
    { name: "Profile", href: "/profile", child: null },
    { name: "Blog", href: "/blog",  },
    { name: "Sign In", href: "/signin", },
  ];

  const aunthenticatedNavItems = [
    { name: "Dashboard", href: "/" },
    { name: "Role", href: "/roles" },
    {
      name: "Users",
      href: "/Users",
      child: [
        { name: "Data Anggota Tetap", href: "/users/data-anggota-tetap" },
        { name: "Data Calon Anggota", href: "/users/data-calon-anggota" },
      ],
    },
    { name: "Proker", href: "/proker" },
    { name: "Docs", href: "/docs" },
    { name: "Alumni", href: "/alumni" },
    { name: "Settings", href: "/settings" },
    { name: "Log Out", href: "/logout" },
  ];

  useEffect(() => {
    isLogin
      ? setNavItems(aunthenticatedNavItems)
      : setNavItems(unauthenticatedNavItems);
  }, []);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  return (
    <>
      <div className="flex justify-between items-center gap-4 p-4 md:px-[70px]">
        <div className="flex items-center gap-1">
          <img src="/logo_ukmik.svg" alt="Logo UKM IK" />

          <h1 className="flex md:hidden font-semibold text-primary-4">ukmik</h1>
        </div>

        <MobileView>
          <MobileNavItems navItems={navItems} activeNav={activeNav} />
        </MobileView>

        <BrowserView>
          <BrowserNavItems navItems={navItems} activeNav={activeNav} />
        </BrowserView>
      </div>
    </>
  );
};

export default Navbar;
