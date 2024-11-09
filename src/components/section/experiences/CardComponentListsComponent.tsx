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
    positionStyle =
      "xl:right-[-30px] xl:top-[-50px] lg:right-[-20px] lg:top-[-20px] md:right-[-20px] md:top-[-20px] right-[-15px] top-[-15px]";
  } else if (position === "top-left") {
    positionStyle =
      "xl:left-[-30px] xl:top-[-50px]  lg:left-[-20px] lg:top-[-30px] md:right-[220px] md:top-[-20px] right-[150px] top-[-10px]";
  } else if (position === "bottom-right") {
    positionStyle =
      "xl:right-[-30px] xl:bottom-[-30px] lg:right-[-20px] lg:bottom-[-15px] md:right-[-20px] md:bottom-[-10px] right-[-15px]  bottom-[-10px]";
  }
  return (
    <div
      className={`${className} bg-white border-2 border-gray-200 xl:p-[20px] lg:p-[15px] md:p-[15px] p-[8px] relative`}
    >
      <Image
        className={`absolute ${positionStyle} xl:w-[84px] xl:h-[84px] lg:w-[55px] lg:h-[55px] md:w-[42px] md:h-[32px] w-[32px] h-[24px]`}
        src={icon}
        alt="icon"
      />
      <h1 className="xl:text-[72px] lg:text-[42px] md:text-[32px] font-bold">
        XX
      </h1>
      <p className="xl:ml-5 text-[#667299] xl:text-[24px] md:text-[16px] border-[6px] border-[#F9995D] border-t-0 border-r-0 border-b-0 px-4 ">
        {content}
      </p>
    </div>
  );
};

const CardComponentLists = () => {
  return (
    <div className="relative">
      <div className="absolute xl:top-[-20px] xl:right-[0px] lg:top-[150px] lg:right-[0px] md:top-[120px] md:right-[240px] sm:right-[220px] 
      top-[120px] right-[150px]">
        <div className="absolute z-10 xl:top-[100px] xl:right-[120px] lg:top-[100px] lg:right-[150px]  right-[-130px] ">
          <CardComponent
            className="xl:w-[300px] md:w-[200px] w-[140px] "
            content="Happy Clients"
            icon={icon1}
            position="top-right"
          />
        </div>
        <div
          className="absolute xl:top-[220px] xl:right-[340px] lg:top-[190px] lg:right-[270px] md:top-[50px] md:right-[-40px] 
        top-[40px] right-[-120px]
        "
        >
          <CardComponent
            className="xl:w-[400px] md:w-[250px] w-[170px]"
            content="Projects Completed"
            icon={icon2}
            position="top-left"
          />
        </div>
        <div
          className="absolute z-10 xl:top-[390px] xl:right-[140px]  lg:top-[290px] lg:right-[140px] md:top-[140px] md:right-[-150px] 
        top-[95px] right-[-120px] "
        >
          <CardComponent
            className="xl:w-[300px] md:w-[200px] w-[140px]"
            content="Awards Win"
            icon={icon3}
            position="top-right"
          />
        </div>

        <div
          className="absolute xl:top-[540px] xl:right-[320px] lg:top-[380px] lg:right-[250px] md:top-[220px] md:right-[-80px]
      top-[140px] right-[-110px]
      "
        >
          <CardComponent
            className="xl:w-[400px] md:w-[250px] w-[170px]"
            content="Years in Business"
            icon={icon4}
            position="bottom-right"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponentLists;
