import HeaderIcon from "./HeaderIcon";
import Avatar from "./menus/Avatar";
import Help from "./menus/Help";
import Nightmode from "./header_icons/Nightmode";
import Report from "./header_icons/Report";
import Status from "./menu_icons/Status";
import HeaderMenu from "./HeaderMenu";

const HeaderEnd = () => {
  const help_menu_items = [
    {
      icon: Status,
      label: "Status",
    },
  ];
  return (
    <div className="ml-auto flex gap-2">
      <HeaderIcon>
        <Report />
      </HeaderIcon>
      <HeaderIcon>
        <Nightmode />
      </HeaderIcon>
      <HeaderMenu menu_items={help_menu_items}>
        <Help />
      </HeaderMenu>
      <HeaderIcon>
        <Avatar />
      </HeaderIcon>
    </div>
  );
};

export default HeaderEnd;
