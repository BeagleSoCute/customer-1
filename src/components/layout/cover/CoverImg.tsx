"use client";
import Image from "next/image";
import coverImg from "./assets/coverPage.jpg";
const CoverImg = () => {
  return (
    <div className="w-full">
      <Image
        className="lg:h-[550px] md:h-96 h-[170px] w-full"
        src={coverImg}
        alt="cover"
      />
    </div>
  );
};

export default CoverImg;
