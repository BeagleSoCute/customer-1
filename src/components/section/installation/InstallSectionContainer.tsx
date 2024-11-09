import { cardContents } from "./contentData";
import { propsDataTypes } from "./type";
import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import CardContent from "./CardContent";
const InstallSectionContainer = () => {
  const data = cardContents.reduce(
    (
      acc: { primary: propsDataTypes[]; other: propsDataTypes[] },
      curr: propsDataTypes,
      index
    ) => {
      if (index <= 1) return { ...acc, primary: [...acc.primary, curr] };
      else return { ...acc, other: [...acc.other, curr] };
    },
    { primary: [], other: [] }
  );
  return (
    <SectionContainerHOC additionalStyles="bg-[#F6F8F7]">
      <h1 className="text-center font-bold md:mb-[64px] mb-[23px] ">
        Tile Installation Services
      </h1>
      <div className="flex justify-center gap-x-[32px]">
        {data.primary.map((item, index) => (
          <div key={index} className="h-[220px] w-[488px]">
            <CardContent data={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center md:gap-x-[66px] gap-x-[4px] md:mt-[48px] mt-[20px]">
        {data.other.map((item, index) => (
          <div key={index} className="h-[220px] w-[271px]">
            <CardContent data={item} />
          </div>
        ))}
      </div>
    </SectionContainerHOC>
  );
};

export default InstallSectionContainer;
