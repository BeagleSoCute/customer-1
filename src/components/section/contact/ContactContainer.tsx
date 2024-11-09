import JoinButton from "../../share/JoinButton";

const ContactContainer = () => {
  return (
    <div
      className={`contact-container-img   lg:h-[300px] md:h-[200px] lg:px-[107px] lg:py-[82px]  sm:px-[57px] sm:py-[32px] px-[12px] py-[22px]  text-[#FFFFFF] my-auto`}
    >
      <h1 className="lg:mb-[32px] md:mb-[8px] lg:text-[32px] sm:text-[23px] text-[16px]">
        Contact us now for a free estimate!
      </h1>
      <div className="flex justify-between">
        <h2 className=" lg:text-[23px] sm:text-[16px] text-[12px] items-end align-bottom mt-auto">
          Feel Free To Contact Us:{" "}
          <span className="underline">021 166 1905</span>
        </h2>
        <JoinButton className="border-2 mb-4 border-white bg-transparents sm:px-[20px] sm:py-[16px] px-[5px] py-[5px]">
          <p>Get your consultation</p>
        </JoinButton>
      </div>
    </div>
  );
};

export default ContactContainer;
