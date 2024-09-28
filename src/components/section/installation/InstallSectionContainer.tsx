import { cardContents } from "./contentData";
import CardContent from "./CardContent";
const InstallSectionContainer = () => {
  return (
    <>
      <h1 className="text-center font-bold ">Tile Installation Services</h1>
      <div className="md:flex md:justify-center  inline-block items-center md:mt-[60px] mt-[30px] gap-x-[66px]">
        {cardContents.map((item) => (
          <CardContent data={item} />
        ))}
      </div>
    </>
  );
};

export default InstallSectionContainer;
