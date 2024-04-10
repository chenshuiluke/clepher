import { ReactElement, ReactPortal } from "react";
import Report from "./header_icons/Report";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

type SidebarIconProps = {
  children: ReactElement;
  href: Url;
  active: Boolean;
};
const SidebarIcon = ({ children, href, active }: SidebarIconProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`group flex h-12 w-12 content-center items-center justify-center rounded-md  ${active ? "bg-sidebar-bg-active-color text-sidebar-active-color" : "hover:bg-gray-300"}`}
      >
        {children}
      </Link>
    </li>
  );
};

export default SidebarIcon;
