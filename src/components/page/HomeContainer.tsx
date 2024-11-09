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
      <div id="about-us">
        <AboutUsComponent />
      </div>
      <div id="service" className="mt-[64px]">
        <InstallSectionContainer />
      </div>
      <div id="experience">
        <ExperienceContainer />
      </div>
      <div id="contact">
        <ContactContainer />
      </div>
      <div id="project">
        <ProjectContainer />
      </div>
      <div id="email">
        <EmailForm />
      </div>
    </div>
  );
};

export default HomeContainer;
