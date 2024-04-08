import Image from "next/image";
const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      width={40}
      height={40}
      src={"/img/human.jpeg"}
      className="w-10 rounded-full"
    ></Image>
  );
};

export default Avatar;
