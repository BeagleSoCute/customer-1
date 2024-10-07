import SectionContainerHOC from "@/components/container/SectionContainerHOC";
import CardComponentListsComponent from "./CardComponentListsComponent";
const ExperienceContainer = () => {
  return (
    <SectionContainerHOC>
      <div className="flex">
        <div className="sm:w-[60%] w-[55%]">
          <CardComponentListsComponent />
        </div>
        <div className="sm:w-[40%] w-[45%]">
          <h1 className="lg:text-[60px] md:text-[32px] blue-text font-bold">
            10 Years <span className="block"> Experience</span>{" "}
          </h1>
          <div className="lg:text-[20px] md:text-[16px] text-[#525B7A]">
            <h2 className="my-[16px]">EXPERIENCE</h2>
            <p>
              Throughout the years, we’ve worked on a wide variety of projects,
              from kitchen backsplashes to bathroom floors and shower walls. Our
              expertise is in the details carefully aligning every tile and
              ensuring a perfect finish. We believe in using the best materials
              and techniques to provide our clients with results that are both
              beautiful and long-lasting.
            </p>
            <h2 className="my-[16px]">VALUES</h2>
            <p>
              We stand by our values of quality, reliability, and customer
              satisfaction. We understand the importance of a job well done,
              which is why we approach every project with meticulous attention
              to detail. When you choose PTS Tilling and Decorating Limited ,
              you’re choosing a team that takes pride in delivering exceptional
              tile installations.
            </p>
          </div>
          <div className="flex justify-end">
            <button className="button-global-style md:mt-[41px] mt-[15px] bg-white text-black blue-btn ">
              Join With Us
            </button>
          </div>
        </div>
      </div>
    </SectionContainerHOC>
  );
};

export default ExperienceContainer;
