import { projectTypes } from "@/app/data/projectData";
import { Image } from "antd";
type propsType = {
  projectDetails: projectTypes;
};

const CardComponent = ({ projectDetails }: propsType) => {
  return (
    <div className="w-full lg:h-[300px] sm:h-[200px] h-[150px] text-white">
      <Image height={"100%"} width={"100%"} src={projectDetails.photo[0]} alt="project-img" />
      {/* <div className="p-2">
      <h1 className="text-[20px] font-bold –700">{projectDetails.title}</h1>
      <p>{projectDetails.address}</p>
      </div> */}
    </div>
  );
};

export default CardComponent;