"use client";
import logo1 from "./assets/logo.jpg";
import logo2 from "./assets/logo2.svg";
import menu from "./assets/menu.png";
import Image from "next/image";
import { Dropdown } from "antd";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Menu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { key: 1, label: "Home", path: "/" },
    { key: 2, label: "About Us", path: "#about-us" },
    { key: 3, label: "Services", path: "#service" },
    { key: 4, label: "Project", path: "#project" },
    { key: 5, label: "Gallery", path: "/gallery" },
    { key: 6, label: "Contact Us", path: "#email" },
  ];
  const handleNavigation = (path: string) => {
    if (pathname === "/" && path.startsWith("/#")) {
      // If already on the home page, scroll directly to the section
      const sectionId = path.split("#")[1];
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if(path !== '/gallery') {
      // Navigate to the home page with a hash for scrolling
      router.push('/'+path);
    }else{
      router.push(path)
    }
  };
  return (
    <div className="flex justify-between w-full h-20 sm:px-6 px-4">
      <div className="flex items-center sm:gap-6 ">
        <Image className="h-full sm:w-24 w-14" src={logo1} alt="logo" />
        <Image className="h-1/2 sm:w-12 w-8" src={logo2} alt="logo" />
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden my-auto">
        <Dropdown
          menu={{
            items: items.map((item) => ({
              key: item.key,
              label: (
                <p
                  onClick={() => handleNavigation(item.path)}
                  className="cursor-pointer"
                >
                  {item.label}
                </p>
              ),
            })),
          }}
          placement="bottomLeft"
        >
          <Image className="h-6 w-6" src={menu} alt="menu" />
        </Dropdown>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center lg:gap-16 md:gap-5 mr-16">
        {items.map((item) => (
          <p
            key={item.key}
            onClick={() => handleNavigation(item.path)}
            className="cursor-pointer"
          >
            {item.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Menu;
