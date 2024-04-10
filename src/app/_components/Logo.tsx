import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <div>
      <Link href="/">
        <Image
          alt="Logo"
          width={40}
          height={40}
          src={"/img/logo.jpg"}
          className="w-[2.5rem] rounded-full"
        />
      </Link>
    </div>
  );
};

export default Logo;
