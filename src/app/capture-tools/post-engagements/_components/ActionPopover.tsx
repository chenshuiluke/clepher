import useOutsideClick from "@/lib/hooks/useOutsideClick";
import Link from "next/link";
import { useRef, useState } from "react";

const ActionPopover = () => {
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
  useOutsideClick(menuRef, btnRef, () => setIsMenuOpen(false));
  return (
    <div className="relative">
      <button
        className="rounded-lg border border-slate-600 px-2 py-1 hover:bg-slate-600 hover:text-white"
        ref={btnRef}
        onClick={() => setIsMenuOpen(true)}
      >
        Actions
      </button>
      {isMenuOpen && (
        <>
          <ul
            className="bg-base-100 h-42  w-58 absolute left-0 z-10 rounded-2xl bg-white px-2 py-1 shadow"
            role="menu"
            ref={menuRef}
          >
            <li role="menuitem">
              <Link
                href={""}
                className="flex flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-slate-600/20"
              >
                <p className="w-full text-[12px]">Edit</p>
              </Link>
              <Link
                href={""}
                className="flex flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-slate-600/20"
              >
                <p className="w-full text-[12px]">Rename</p>
              </Link>
              <Link
                href={""}
                className="flex flex-row items-center gap-2 rounded-lg px-2 py-1 hover:bg-slate-600/20"
              >
                <p className="w-full text-[12px]">Delete</p>
              </Link>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default ActionPopover;
