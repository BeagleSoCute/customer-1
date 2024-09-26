"use client";
import { useState } from "react";
import logo1 from "@/app/assets/logo/logo.jpg";
import logo2 from "@/app/assets/logo/logo2.svg";
import menu from "@/app/assets/icons/menu.png";
import Image from "next/image";
import { Dropdown } from "antd";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const items = [
    { key: 1, label: "Home" },
    { key: 1, label: "About Us" },
    { key: 1, label: "Services" },
    { key: 1, label: "Project" },
    { key: 1, label: "Gallery" },
    { key: 1, label: "Contact Us" },
  ];

  return (
    <div className="flex justify-between w-full h-20 sm:px-6 px-4">
      <div className="flex items-center sm:gap-6 ">
        <Image className="h-full sm:w-24 w-14" src={logo1} alt="logo" />
        <Image className="h-1/2 sm:w-12 w-8" src={logo2} alt="logo" />
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden my-auto">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Image className="h-6 w-6" src={menu} alt="logo" />
        </Dropdown>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center lg:gap-16 md:gap-5 mr-16">
        <p className="cursor-pointer">Home</p>
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Services</p>
        <p className="cursor-pointer">Project</p>
        <p className="cursor-pointer">Gallery</p>
        <p className="cursor-pointer">Contact Us</p>
      </div>
    </div>
  );
};

export default Menu;
