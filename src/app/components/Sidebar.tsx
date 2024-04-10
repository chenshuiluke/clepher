import Link from "next/link";
import CaptureTools from "./sidenav_icons/CaptureTools";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <ul className="menu bg-base-100 min-h-full overflow-scroll border-r border-r-base-300 bg-white px-2 pt-20">
      <SidebarIcon href={""} active={true}>
        <CaptureTools />
      </SidebarIcon>
    </ul>
  );
};

export default Sidebar;
