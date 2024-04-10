import HeaderIcon from "./HeaderIcon";
import Avatar from "./menus/Avatar";
import Help from "./menus/Help";
import Nightmode from "./header_icons/Nightmode";
import Report from "./header_icons/Report";
import Status from "./menu_icons/Status";
import HeaderMenu from "./HeaderMenu";
import Community from "./menu_icons/Community";
import KnowledgeBase from "./menu_icons/KnowledgeBase";
import Home from "./menu_icons/Home";
import Billing from "./menu_icons/Billing";
import Account from "./menu_icons/Account";
import LogOut from "./menu_icons/LogOut";

const HeaderEnd = () => {
  const help_menu_items = [
    {
      icon: Status,
      label: "Status",
      href: "",
    },
    {
      icon: Community,
      label: "Community",
      href: "",
    },
    {
      icon: KnowledgeBase,
      label: "Knowledge Base",
      href: "",
    },
  ];
  const user_menu_items = [
    {
      icon: Home,
      label: "Home",
      href: "",
    },
    {
      icon: Billing,
      label: "Billing",
      href: "",
    },
    {
      icon: Account,
      label: "Account",
      href: "",
    },
    {
      icon: LogOut,
      label: "Log Out",
      href: "",
    },
  ];
  return (
    <div className="ml-auto flex gap-2">
      <HeaderIcon href={""}>
        <Report />
      </HeaderIcon>
      <HeaderIcon href={""}>
        <Nightmode />
      </HeaderIcon>
      <HeaderMenu menu_items={help_menu_items}>
        <Help />
      </HeaderMenu>
      <HeaderMenu menu_items={user_menu_items}>
        <Avatar />
      </HeaderMenu>
    </div>
  );
};

export default HeaderEnd;
