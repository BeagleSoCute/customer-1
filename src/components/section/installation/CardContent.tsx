import Image from "next/image";
import { propsDataTypes } from "./type";

type propsType = {
  data: propsDataTypes;
};

const CardContent = ({ data }: propsType) => {
  return (
    //h-[292px] w-[282px]
    <div className=" border-2 border-gray-200 p-[20px] h-full content-center bg-white">
      <div className="flex justify-center ">
        <div className="border border-b-[3px] border-b-gray-200 border-t-0 border-r-0 border-l-0 p-5">
          <Image className="" src={data.icon} alt="icon" />
        </div>
      </div>
      <div className="mt-[18px] text-center">
        <h1 className=" md:text-[20px] text-[20px]  mb-[18px] text-[#389BD4] ">
          {data.content}
        </h1>
      </div>
    </div>
  );
};

export default CardContent;
