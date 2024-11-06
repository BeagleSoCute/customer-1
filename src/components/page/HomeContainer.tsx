//components
import AboutUsComponent from "@/components/section/aboutus/AboutUsContainer";
import InstallSectionContainer from "../section/installation/InstallSectionContainer";
import ExperienceContainer from "../section/experiences/ExperienceContainer";
import ContactContainer from "../section/contact/ContactContainer";
import ProjectContainer from "../section/projects/ProjectContainer";
import EmailForm from "../section/emailForm/EmailFormContainer";
const HomeContainer = () => {
  return (
    <div>
      <AboutUsComponent />
      <div className="mt-[64px]">
        <InstallSectionContainer />
      </div>
      <ExperienceContainer />
      <ContactContainer />
      <ProjectContainer />
      <div className=" h-[5000px]">
        <EmailForm />
      </div>
    </div>
  );
};

export default HomeContainer;
