import { ReactElement, ReactPortal } from "react";
import Report from "./header_icons/Report";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type HeaderIconProps = {
  children: ReactElement;
  href: Url;
};
const HeaderIcon = ({ children, href }: HeaderIconProps) => {
  return (
    <Link
      href={href}
      className="group flex h-12 w-12 content-center items-center justify-center rounded-full hover:bg-gray-300"
    >
      {children}
    </Link>
  );
};

export default HeaderIcon;
