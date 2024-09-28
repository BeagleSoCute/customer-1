//components
import AboutUsComponent from "@/components/section/aboutus/AboutUsContainer";
import InstallSectionContainer from "../section/installation/InstallSectionContainer";

const HomeContainer = () => {
  return (
    <div>
      <div>
        <AboutUsComponent />
      </div>
      <div className="my-[64px]">
        <InstallSectionContainer />
      </div>
    </div>
  );
};

export default HomeContainer;
