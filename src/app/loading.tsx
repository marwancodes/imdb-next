import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src="/spinner.svg" alt="Loading..." width={50} height={50} />
    </div>
  );
};

export default Loading;
