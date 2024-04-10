import {
  MutableRefObject,
  ReactElement,
  ReactNode,
  ReactPortal,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import useOutsideClick from "@/lib/hooks/useOutsideClick";
import { Url } from "next/dist/shared/lib/router/router";

type HeaderMenuProps = {
  menu_items: Array<{ icon: () => ReactElement; label: string; href: Url }>;
  children: ReactNode;
};
const HeaderMenu = ({ children, menu_items }: HeaderMenuProps) => {
  const menuRef = useRef(null);
  const iconRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  useOutsideClick(menuRef, iconRef, () => setIsMenuOpen(false));
  return (
    <div className="relative">
      <div
        className="group flex h-12 w-12 content-center items-center justify-center rounded-full hover:bg-gray-300"
        ref={iconRef}
        onClick={() => setIsMenuOpen(true)}
      >
        {children}
      </div>
      {isMenuOpen && (
        <>
          <ul
            className="bg-base-100  absolute right-0 mt-3 w-52 rounded-2xl bg-white p-2 shadow"
            role="menu"
            ref={menuRef}
          >
            {menu_items.map((menu_item) => {
              return (
                <li role="menuitem" key={menu_item.label}>
                  <Link
                    href={menu_item.href}
                    className="flex flex-row items-center gap-2 rounded-lg px-4 py-2 hover:bg-slate-600/20"
                  >
                    {menu_item.icon()}
                    <p className="w-full text-sm">{menu_item.label}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default HeaderMenu;
