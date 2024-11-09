"use client";
import React, { useState, useMemo } from "react";
import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import { projectLists, projectTypes } from "@/app/data/projectData";
import CardComponent from "./CardComponent";
import { upperTheFirstChar } from "@/helper/common.helper";
import { useRouter } from "next/navigation";

type tabListTypes = "all" | "kitchen" | "bathroom";
const ProjectContainer = () => {
  const router = useRouter()
  const tablists: tabListTypes[] = ["all", "kitchen", "bathroom"];
  const [activeName, setActiveName] = useState<tabListTypes>("all");
  const defaultProject = useMemo(() => projectLists.slice(0, 4), []);
  const totalPage = projectLists.length / 4;
  const [displayProjects, setDisplayProjects] =
    useState<projectTypes[]>(defaultProject);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSetDisplay = (tabName: tabListTypes) => {
    const filteredProjects = projectLists
      .filter((item: projectTypes) => item.type === tabName)
      .slice(0, 4);
    setDisplayProjects(filteredProjects);
  };
  const handleSelectType = (tabName: tabListTypes) => {
    setActiveName(tabName);
    setCurrentPage(1);
    if (tabName === "all") {
      setDisplayProjects(defaultProject);
    } else {
      handleSetDisplay(tabName);
    }
  };
  const handleActionNext = (projectInterval = 0) => {
    let filteredProjects = projectLists;
    if (activeName !== "all") {
      filteredProjects = projectLists.filter(
        (item: projectTypes) => item.type === activeName
      );
    }
    const firstItem = projectInterval - 4;
    filteredProjects = filteredProjects.slice(firstItem, projectInterval);
    setDisplayProjects(filteredProjects);
  };
  const handleSelectNextInterval = () => {
    let thisPage = currentPage + 1;
    if (thisPage > totalPage) {
      thisPage = 1;
    }
    const projectInterval = thisPage * 4;
    handleActionNext(projectInterval);
    setCurrentPage(thisPage);
  };
  const handleActionPrevious = (projectInterval = 0) => {
    let filteredProjects = projectLists;
    if (activeName !== "all") {
      filteredProjects = projectLists.filter(
        (item: projectTypes) => item.type === activeName
      );
    }
    const firstItem = projectInterval - 4;
    filteredProjects = filteredProjects.slice(firstItem, projectInterval);
    setDisplayProjects(filteredProjects);
  };
  const handleSelectPreviousInterval = () => {
    let thisPage = currentPage - 1;
    if (thisPage === 0) {
      thisPage = totalPage;
    }
    const projectInterval = thisPage * 4;
    handleActionPrevious(projectInterval);
    setCurrentPage(thisPage);
  };
  const actionNextPreviousBtnStyle =
    "bg-[#292E3D] lg:h-[44px] xl:w-[265px] lg:w-[165px] md:h-[44px] md:w-[94px] h-[30px] w-[75px]";
  return (
    <SectionContainerHOC>
      <div className="grid grid-cols-12">
        <div id="project-section" className="md:col-span-4 col-span-4">
          <h1 className="lg:text-[48px]">Projects</h1>
          <div>
            {tablists.map((item: tabListTypes, index: number) => (
              <p
                key={index}
                onClick={() => handleSelectType(item)}
                className={`  lg:text-[24px] md:text-[18px] my-[20px] px-[20px] cursor-pointer ${
                  activeName === item
                    ? " text-[#389BD4] border-l-4 border-[#389BD4]"
                    : "text-[#C2C7D6]"
                }`}
              >
                {upperTheFirstChar(item)}
              </p>
            ))}
          </div>
          <button onClick={()=> router.push('/gallery')} className="bg-[#389BD4] md:px-[20px] sm:px-[8px] px-[2px]  md:py-[11px]  sm:-py[5px] py-[2spx]  ">
            <p className="text-white">SEE ALL PROJECT</p>
          </button>
        </div>
        <div id="project-contents" className="md:col-span-8 col-span-8">
          <div className="grid grid-cols-2 sm:gap-6 gap-2">
            {displayProjects.map((item: projectTypes, index: number) => (
              <div key={index} className="col-span-1">
                <CardComponent projectDetails={item} />
              </div>
            ))}
          </div>
          <div className="flex justify-between  mt-[32px] text-white">
            <button
              onClick={handleSelectPreviousInterval}
              className={actionNextPreviousBtnStyle}
            >
              Back
            </button>
            <button
              onClick={handleSelectNextInterval}
              className={actionNextPreviousBtnStyle}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </SectionContainerHOC>
  );
};

export default ProjectContainer;
