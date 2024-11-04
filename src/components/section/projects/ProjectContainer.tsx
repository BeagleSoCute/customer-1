"use client";
import React, { useState, useMemo } from "react";
import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import { projectLists, projectTypes } from "@/app/data/projectData";
import CardComponent from "./CardComponent";
import { upperTheFirstChar } from "@/helper/common.helper";
type tabListTypes = "all" | "kitchen" | "bathroom";
const ProjectContainer = () => {
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
  return (
    <SectionContainerHOC>
      <div className="grid grid-cols-12">
        <div id="project-section" className="col-span-5">
          <h1 className="lg:text-[48px]">Projects</h1>

          <div>
            {tablists.map((item: tabListTypes, index: number) => (
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
          <div className="flex justify-between mt-[32px] text-white">
            <button
              onClick={handleSelectPreviousInterval}
              className="bg-[#292E3D]  h-[44px] w-[265px]"
            >
              Back
            </button>
            <button
              onClick={handleSelectNextInterval}
              className="bg-[#292E3D] h-[44px]  w-[265px]"
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
