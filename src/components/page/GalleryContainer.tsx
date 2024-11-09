"use client";
import React, { useState } from "react";
import SectionContainerHOC from "../container/SectionContainerHOC";
// import Image from "next/image";
import { Image } from "antd";
//Types
import { projectLists, projectTypes } from "@/app/data/projectData";
//Helpers
import { upperTheFirstChar } from "@/helper/common.helper";

type tabListTypes = "all" | "kitchen" | "bathroom";

const GalleryContainer = () => {
  const tablists: tabListTypes[] = ["all", "kitchen", "bathroom"];
  const [activeName, setActiveName] = useState<tabListTypes>("all");
  const [displayGallery, setDisplayGallery] =
    useState<projectTypes[]>(projectLists); // Fixed typo here

  const handleSetDisplay = (tabName: tabListTypes) => {
    const filteredProjects = projectLists.filter(
      (item: projectTypes) => item.type === tabName
    );
    setDisplayGallery(filteredProjects); // Fixed typo here
  };

  const handleSelectType = (tabName: tabListTypes) => {
    setActiveName(tabName);
    if (tabName === "all") {
      setDisplayGallery(projectLists); // Fixed typo here
    } else {
      handleSetDisplay(tabName);
    }
  };

  return (
    <SectionContainerHOC additionalStyles="bg-red">
      <div className="text-center">
        <h1>Gallery</h1>
      </div>
      <div className="flex justify-center w-full mt-[32px]">
        {tablists.map((item: tabListTypes, index: number) => (
          <p
            key={index}
            onClick={() => handleSelectType(item)}
            className={`lg:text-[24px] md:text-[18px] my-[20px] px-[20px] cursor-pointer ${
              activeName === item
                ? " text-[#389BD4] border-l-4 border-[#389BD4]"
                : "text-[#C2C7D6]"
            }`}
          >
            {upperTheFirstChar(item)}
          </p>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-2 sm:gap-6 gap-2">
        {displayGallery.map((item: projectTypes, index: number) => (
          <div
            key={index}
            className="col-span-1 lg:h-[350px]  sm:h-[250px]  h-[200px]"
          >
            <Image
              height={"100%"}
              width={"100%"}
              src={item.photo[0]}
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </SectionContainerHOC>
  );
};

export default GalleryContainer;
