import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full">
<Image 
        src={"/assets/footer.png"} 
        alt="footer" 
        layout="responsive" 
        width={80} 
        height={100} 
        objectFit="cover"
      />    </div>
  );
};

export default Footer;
