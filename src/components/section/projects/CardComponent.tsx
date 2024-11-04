import { projectTypes } from "@/app/data/projectData";
import Image from "next/image";
type propsType = {
  projectDetails: projectTypes;
};

const CardComponent = ({ projectDetails }: propsType) => {
  return (
    <div className="w-full bg-yellow-500 text-white">
      <Image className="w-" src={projectDetails.photo[0]} alt="project-img" />
      {/* <div className="p-2">
      <h1 className="text-[20px] font-bold –700">{projectDetails.title}</h1>
      <p>{projectDetails.address}</p>
      </div> */}

    </div>
  );
};

export default CardComponent;
