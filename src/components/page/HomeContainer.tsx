//components
import AboutUsComponent from "@/components/section/aboutus/AboutUsContainer";
import InstallSectionContainer from "../section/installation/InstallSectionContainer";
import ExperienceContainer from "../section/experiences/ExperienceContainer";
import ContactContainer from "../section/contact/ContactContainer";
import ProjectContainer from "../section/projects/ProjectContainer";
const HomeContainer = () => {
  return (
    <div>
      <div>
        <AboutUsComponent />
      </div>
      <div className="mt-[64px]">
        <InstallSectionContainer />
      </div>
      <div>
        <ExperienceContainer />
      </div>
      <div>
        <ContactContainer />
      </div>
      <div className=" h-[5000px]">
        <ProjectContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
