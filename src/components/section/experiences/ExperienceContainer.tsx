import JoinButton from "../../share/JoinButton";
const ExperienceContainer = () => {
  return (
    <div className="pt-[32px]">
      <div className="relative">
        <div className="absolute z-10 w-full  h-full">
          <img
            className="w-full h-full"
            src="/assets/exp-section.jpg"
            alt="bg"
          />
        </div>
        <div className="absolute z-20 w-full h-full bg-black opacity-80"></div>

        <div className="flex justify-center relative z-20 py-[30px]">
          {/* <div className="sm:w-[60%] w-[55%]">
          <CardComponentListsComponent />
        </div> */}
          <div className="sm:w-[60%] w-[80%] ">
            <h1 className="lg:text-[60px] md:text-[32px] blue-text font-bold ">
              10 Years <span className="block"> Experience</span>{" "}
            </h1>
            <div className="lg:text-[20px] md:text-[16px] text-[white]">
              <h2 className="my-[16px]">EXPERIENCE</h2>
              <p>
                Throughout the years, we’ve worked on a wide variety of
                projects, from kitchen backsplashes to bathroom floors and
                shower walls. Our expertise is in the details carefully aligning
                every tile and ensuring a perfect finish. We believe in using
                the best materials and techniques to provide our clients with
                results that are both beautiful and long-lasting.
              </p>
              <h2 className="my-[16px]">VALUES</h2>
              <p>
                We stand by our values of quality, reliability, and customer
                satisfaction. We understand the importance of a job well done,
                which is why we approach every project with meticulous attention
                to detail. When you choose PTS Tilling and Decorating Limited ,
                you’re choosing a team that takes pride in delivering
                exceptional tile installations.
              </p>
            </div>
            <div className="flex justify-end">
              <JoinButton className="button-global-style md:mt-[41px] mt-[15px] bg-white text-black blue-btn " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceContainer;
