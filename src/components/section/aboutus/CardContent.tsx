import Image from "next/image";
type propsTypes = {
  data: {
    key: number;
    icon: string;
    title: string;
    content: string;
  };
};

const CardContent = ({ data }: propsTypes) => {
  return (
    <div className="h-[292px] w-[282px] border-2 border-gray-200 p-[20px]">
      <Image src={data.icon} alt="icon" />
      <div className="mt-[18px]">
      <h1  className="text-[20px] mb-[18px]">{data.title}</h1>
      <p className="text-gray-400">{data.content}</p>
      </div>
   
    </div>
  );
};

export default CardContent;
