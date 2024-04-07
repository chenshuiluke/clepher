import { ReactElement, ReactPortal } from "react";
import Report from "./icons/Report";
import Link from "next/link";

type HeaderIconProps = {
  children: ReactElement;
};
const HeaderIcon = ({ children }: HeaderIconProps) => {
  return (
    <Link
      href="/"
      className="group flex h-12 w-12 justify-center rounded-full align-middle hover:bg-gray-300"
    >
      {children}
    </Link>
  );
};

export default HeaderIcon;
