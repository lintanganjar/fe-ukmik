import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const BrowserNavItems = ({ navItems, activeNav }) => {
  return (
    <div className="flex gap-14 items-center">
      {navItems.map(({href, name, child}) => (
        <Link to={href} className="flex items-center gap-1 text-[18px] font-medium leading-[27px]">
          <h1 className={`${activeNav === href ? "font-bold" : ""}  `}>{name}</h1>

          {child && <ChevronDownIcon />}
        </Link>
      ))}

      <Button className="bg-primary-3 hover:bg-primary-2 rounded-[48px]" >Sign In</Button>
    </div>
  );
};

export default BrowserNavItems;
