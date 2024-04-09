import { ReactElement, ReactNode, ReactPortal } from "react";
import Link from "next/link";

type HeaderMenuProps = {
  menu_items: Array<{ icon: () => ReactElement; label: string }>;
  children: ReactNode;
};
const HeaderMenu = ({ children, menu_items }: HeaderMenuProps) => {
  return (
    <div className="relative">
      <Link
        href="/"
        className="group flex h-12 w-12 content-center items-center justify-center rounded-full hover:bg-gray-300"
      >
        {children}
      </Link>
      <ul
        className="dropdown-content menu bg-base-100 rounded-box absolute mt-3 w-48 bg-white p-2 shadow"
        role="menu"
      >
        {menu_items.map((menu_item) => {
          return (
            <li role="menuitem" key={menu_item.label}>
              <a className="flex flex-row">
                {menu_item.icon()}
                {menu_item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HeaderMenu;
