import React from "react";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { Link } from "react-router-dom";

const MobileNavItems = ({ navItems, activeNav, isLogin }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const handleClose = () => {
    setIsOpen(!isOpen);
    setShowDropdown(!showDropdown);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="ghost">
        <HamburgerMenuIcon width={24} height={24} />
      </Button>

      <div
        className={`${
          !isOpen ? "-mt-[220%]" : ""
        } transition-all duration-700 absolute right-0 top-0 z-20  h-[470px] w-[360px] text-center   flex  justify-between`}
      >
        <div
          className={`${
            !isLogin
              ? "NavOpen transition-all duration-700 absolute right-0 top-0 z-20 bg-primary-8  w-[100vw] text-center py-2  flex flex-col justify-between"
              : "h-[100vw]"
          }`}
        >
          <div className="NavItems flex flex-col mt-2">
            <div className={`Close-Nav ${isOpen ? "visible" : "hidden "} flex`}>
              <Button onClick={handleClose} variant="transparant">
                <Cross2Icon
                  width={28}
                  height={30}
                  stroke="5"
                  className="text-black font-semibold fixed z-10"
                />
              </Button>
            </div>
            {navItems.map(({ name, href, child }) => (
              <div key={href} className="relative ">
                {child ? (
                  <div className="flex flex-col gap-[1px] transition-all duration-700 ">
                    <Button
                      onClick={handleDropdown}
                      variant="link"
                      className={`${
                        (showDropdown && child) || activeNav === href
                          ? "bg-white"
                          : "bg-none"
                      } text-black w-full pl-[40px] h-[60px] rounded-none flex justify-evenly transition-all duration-700`}
                    >
                      <span></span>
                      <h1>{name}</h1>
                      <div className="transition-transform duration-300 delay-500">
                        {showDropdown ? (
                          <Minus className="transform rotate-0 right-4" />
                        ) : (
                          <Plus className="transform rotate-90 right-4" />
                        )}
                      </div>
                    </Button>

                    {showDropdown && href === "/Users" && (
                      <div className="flex flex-col ">
                        {child.map(({ href: childHref, name: childName }) => (
                          <Link
                            key={childHref}
                            to={childHref}
                            onClick={handleClose}
                            className={`${
                              activeNav === childHref
                                ? " bg-sky-50"
                                : "bg-none "
                            } text-black w-full h-[50px] flex justify-center items-center  rounded-none`}
                          >
                            {childName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={href} to={href}>
                    <Button
                      onClick={handleClose}
                      variant="link"
                      className={`${
                        activeNav === href ? "bg-white" : "bg-none"
                      } ${
                        !isLogin
                          ? "text-black w-full h-[70px] rounded-none"
                          : "text-black w-full h-[50px] rounded-none"
                      } `}
                    >
                      <h1>{name}</h1>
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="my-[33px] flex flex-col w-full items-center gap-[20px]">
            <div className="flex gap-[20px]">
              <Link>
                <img src="/facebook.svg" alt="Facebook" />
              </Link>
              <Link>
                <img src="/instagram.svg" alt="Instagram" />
              </Link>
              <Link>
                <img src="/youtube.svg" alt="Youtube" />
              </Link>
            </div>

            <div className="flex flex-col italic text-gray-700">
              <p className="text-xs">© 2024 UKMIK All rights reserved</p>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleClose}
        className={`${
          isOpen ? "opacity-50 z-10" : "opacity-0 -z-10"
        } absolute top-0 left-0 transition-all duration-700 w-screen h-screen bg-black`}
      />
    </>
  );
};

export default MobileNavItems;
