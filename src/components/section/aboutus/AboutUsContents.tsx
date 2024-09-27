import aboutusImg from "@/app/assets/images/aboutusSection.svg";
import Image from "next/image";
import { cardContents } from "./contentData";
import CardContent from "./CardContent";

const AboutUsContents = () => {
  return (
    <>
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
          className="bg-blue-500 md:h-[450px] md:w-[488px] h-[260px] w-[250px] md:py-[50px] md:px-[40px] p-6 text-white absolute 
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
      <div className="flex justify-center mt-[80px] gap-x-[66px]">
        {cardContents.map((item) => (
          <CardContent data={item} />
        ))}
      </div>
    </>
  );
};

export default AboutUsContents;
