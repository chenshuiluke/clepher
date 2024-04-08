import HeaderIcon from "./HeaderIcon";
import Avatar from "./icons/Avatar";
import Help from "./icons/Help";
import Nightmode from "./icons/Nightmode";
import Report from "./icons/Report";

const HeaderEnd = () => {
  return (
    <div className="ml-auto flex gap-2">
      <HeaderIcon>
        <Report />
      </HeaderIcon>
      <HeaderIcon>
        <Nightmode />
      </HeaderIcon>
      <HeaderIcon>
        <Help />
      </HeaderIcon>
      <HeaderIcon>
        <Avatar />
      </HeaderIcon>
    </div>
  );
};

export default HeaderEnd;
