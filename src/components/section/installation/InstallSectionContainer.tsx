import { cardContents } from "./contentData";
import { propsDataTypes } from "./type";

import CardContent from "./CardContent";
const InstallSectionContainer = () => {
  const data = cardContents.reduce(
    (
      acc: { primary: propsDataTypes[]; other: propsDataTypes[] },
      curr: propsDataTypes,
      index
    ): any => {
      if (index <= 1) return { ...acc, primary: [...acc.primary, curr] };
      else return { ...acc, other: [...acc.other, curr] };
    },
    { primary: [], other: [] }
  );
  return (
    <div className="bg-[#F6F8F7] md:p-[64px] px-[12px] py-[23px]">
      <h1 className="text-center font-bold md:mb-[64px] mb-[23px] ">
        Tile Installation Services
      </h1>
      <div className="flex justify-center gap-x-[32px]">
        {data.primary.map((item) => (
          <div className="h-[220px] w-[488px]">
            <CardContent data={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center md:gap-x-[66px] gap-x-[16px] md:mt-[48px] mt-[20px]">
        {data.other.map((item) => (
          <div className="h-[220px] w-[271px]">
            <CardContent data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstallSectionContainer;