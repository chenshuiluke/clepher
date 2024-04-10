import { RefObject, useEffect } from "react";

const useOutsideClick = (
  menuRef: RefObject<HTMLElement>,
  iconRef: RefObject<HTMLElement>,
  onOutsideClick: () => void,
): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        iconRef.current &&
        !iconRef.current.contains(event.target as Node)
      ) {
        onOutsideClick();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, iconRef, onOutsideClick]);
};

export default useOutsideClick;
