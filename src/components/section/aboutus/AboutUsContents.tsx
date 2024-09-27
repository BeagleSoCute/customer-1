import aboutusImg from "@/app/assets/images/aboutusSection.svg";
import Image from "next/image";
import { cardContents } from "./contentData";
import CardContent from "./CardContent";

const AboutUsContents = () => {
  return (
    <>
      <div className="flex justify-center relative">
        <div className="relative w-[1200px] h-[667px]">
          <Image
            src={aboutusImg}
            alt="about us image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="bg-blue-500 h-[450px] w-[488px] py-[50px] px-[40px] text-white absolute right-[50px] top-[80px]">
          <h2 className="text-[36px] ">About us</h2>
          <p className="mt-[43px] w-[388px]">
            PTS Tilling and Decorating Limited , was founded on a commitment to
            excellence in tile installation. For over 10 years, we have been
            delivering reliable and precise tiling services to homeowners and
            businesses alike.
          </p>
          <p className="mt-[16px]">
            Our extensive experience means we know how to get the job done
            right, every time.
          </p>

          <button className="button-global-style mt-[41px] bg-white text-black">
            Join With Us
          </button>
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
