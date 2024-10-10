"use client";
import React, { useState } from "react";
import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import { projectLists, projectTypes } from "@/app/data/projectData";
import CardComponent from "./CardComponent";
import { upperTheFirstChar } from "@/helper/common.helper";
const ProjectContainer = () => {
  const lists = ["all", "kitchen", "bathroom"];
  const [activeName, setActiveName] = useState("all");
  const defaultProject = projectLists.slice(0, 4);
  const [displayProjects, setDisplayProjects] =
    useState<projectTypes[]>(defaultProject);

  const handleSelectType = (status: string) => {
    setActiveName(status);
    if (status === "all") {
      setDisplayProjects(defaultProject);
    } else {
      const filteredProjects = projectLists
        .filter((item: projectTypes) => item.type === status)
        .slice(0, 4);
      console.log("filteredProjects", filteredProjects);
      setDisplayProjects(filteredProjects);
    }
  };
  return (
    <SectionContainerHOC>
      <div className="grid grid-cols-12">
        <div id="project-section" className="col-span-5">
          <h1 className="lg:text-[48px]">Projects</h1>

          <div>
            {lists.map((item: string, index: number) => (
              <p
                key={index}
                onClick={() => handleSelectType(item)}
                className={`text-[24px] my-[20px] px-[20px] cursor-pointer ${
                  activeName === item
                    ? " text-[#389BD4] border-l-4 border-[#389BD4]"
                    : "text-[#C2C7D6]"
                }`}
              >
                {upperTheFirstChar(item)}
              </p>
            ))}
          </div>
          <button className="bg-[#389BD4] px-[20px] py-[11px]">
            <p className="text-white">SEE ALL PROJECT</p>
          </button>
        </div>
        <div id="project-contents" className="col-span-6">
          <div className="grid grid-cols-2 gap-6">
            {displayProjects.map((item: projectTypes, index: number) => (
              <div key={index} className="col-span-1">
                <CardComponent projectDetails={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainerHOC>
  );
};

export default ProjectContainer;
