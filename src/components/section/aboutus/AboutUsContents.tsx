import aboutusImg from "./assets/aboutusSection.svg";
import Image from "next/image";
import { cardContents } from "./contentData";
import CardContent from "./CardContent";

const AboutUsContents = () => {
  return (
    <div>
      <div className="flex justify-center relative w-full">
        <div className="relative md:w-9/12 md:h-[667px] w-full h-[450px]">
          <Image
            src={aboutusImg}
            alt="about us image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div
          className="bg-blue-500 lg:h-[450px] lg:w-[488px] md:h-[330px] md:w-[450px]  h-[260px] w-[250px] lg:py-[50px] md:py-[30px] lg:px-[40px] md:px-[20px] p-6 text-white absolute 
        md:right-[50px] md:top-[80px] top-[70px]"
        >
          <h1>About us</h1>
          <p className="md:mt-[43px] md:w-[388px] w-full">
            PTS Tilling and Decorating Limited , was founded on a commitment to
            excellence in tile installation. For over 10 years, we have been
            delivering reliable and precise tiling services to homeowners and
            businesses alike.
          </p>
          <p className="md:mt-[16px] mt-[8px]">
            Our extensive experience means we know how to get the job done
            right, every time.
          </p>
          <div className=" flex md:justify-start justify-center ">
            <button className="button-global-style md:mt-[41px] mt-[5px] bg-white text-black ">
              Join With Us
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full text-center px-5">
        <div className="md:flex md:justify-center  inline-block items-center md:mt-[60px] mt-[30px] gap-x-[66px]">
          {cardContents.map((item) => (
            <CardContent data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsContents;
