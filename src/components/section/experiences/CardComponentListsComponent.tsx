import Image from "next/image";
//Icons
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";

type propTypeCardComponent = {
  className: string;
  content: string;
  icon: string;
  position: "top-left" | "top-right" | "bottom-right";
};

const CardComponent = ({
  className,
  content,
  icon,
  position,
}: propTypeCardComponent) => {
  let positionStyle = "";
  if (position === "top-right") {
    positionStyle = "right-[-30px] top-[-50px]";
  } else if (position === "top-left") {
    positionStyle = "left-[-30px] top-[-50px]";
  } else if (position === "bottom-right") {
    positionStyle = "right-[-30px] bottom-[-50px]";
  }
  return (
    <div
      className={`${className} bg-white  border-2 border-gray-200 p-[20px] relative`}
    >
      <Image className={`absolute ${positionStyle}`} src={icon} alt="icon" />

      <h1 className="text-[72px] font-bold">XX</h1>
      <p className="ml-5 text-[#667299] text-[24px] border-[6px] border-[#F9995D] border-t-0 border-r-0 border-b-0 px-4 ">
        {content}
      </p>
    </div>
  );
};

const CardComponentLists = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 top-[100px] right-[120px] ">
        <CardComponent
          className="w-[300px]"
          content="Happy Clients"
          icon={icon1}
          position="top-right"
        />
      </div>
      <div className="absolute top-[220px] right-[340px]">
        <CardComponent
          className="w-[400px]"
          content="Projects Completed"
          icon={icon2}
          position="top-left"
        />
      </div>
      <div className="absolute z-10 top-[370px] right-[150px]">
        <CardComponent
          className="w-[300px]"
          content="Awards Win"
          icon={icon3}
          position="top-right"
        />
      </div>

      <div className="absolute top-[480px] right-[280px]">
        <CardComponent
          className="w-[400px]"
          content="Years in Business"
          icon={icon4}
          position="bottom-right"
        />
      </div>
    </div>
  );
};

export default CardComponentLists;
