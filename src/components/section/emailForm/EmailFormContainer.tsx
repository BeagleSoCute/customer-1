

import React from "react";
//Components
import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import InputForm from "./InputForm";
//Icons
import Image from "next/image";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import facebook from "./assets/facebook.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"

const EmailForm = () => {

  return (
    <SectionContainerHOC>
      <div className="text-[#292E3D] text-center">
        <div>
          <h2 className="text-[32px]">
            Ready for a flawless tile installation?
          </h2>
          <h1>
            <span className="font-bold">CONTACT US NOW</span>
          </h1>
        </div>
        <div className="flex justify-center gap-[40px] mt-[21px]">
          <div className="flex gap-[8px]">
            <Image src={icon1} alt="icon1" />
            <p className="my-auto">021 166 1905 </p>
          </div>
          <div className="flex gap-[8px]">
            <Image src={icon2} alt="icon2" />
            <p className="my-auto">Pts.tiling@outlook.com</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-[36px]">
        <Image src={facebook} alt="facebook" />
        <Image src={linkedin} alt="linkedin" />
        <Image src={twitter} alt="twitter" />
        </div>
        <p className="w-[580px] mx-auto mt-[36px]">No matter the project, our experienced team is here to provide top-notch tile installation services you can trust</p>
      <InputForm />
      </div>
    </SectionContainerHOC>
  );
};

export default EmailForm;
