//components
import AboutUsComponent from "@/components/section/aboutus/AboutUsContainer";
import InstallSectionContainer from "../section/installation/InstallSectionContainer";
import ExperienceContainer from "../section/experiences/ExperienceContainer";
const HomeContainer = () => {
  return (
    <div>
      <div>
        <AboutUsComponent />
      </div>
      <div className="mt-[64px]">
        <InstallSectionContainer />
      </div>
      <div className="ms-[64px]">
        <ExperienceContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
