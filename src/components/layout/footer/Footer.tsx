"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className={`w-full ${pathname === "/" ? "bg-[#F6F8F7]" : ""}`}>
      <Image
        src={"/assets/footer.png"}
        alt="footer"
        layout="responsive"
        width={80}
        height={100}
        objectFit="cover"
      />
    </div>
  );
};

export default Footer;
