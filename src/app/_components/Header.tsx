import Logo from "./Logo";
import DisplayTag from "./DisplayTag";
import HeaderEnd from "./HeaderEnd";

const Header = () => {
  return (
    <div className="fixed flex min-h-[4rem] w-full items-center gap-4 border-b border-b-slate-200 bg-white p-2">
      <Logo />
      <DisplayTag />
      <HeaderEnd />
    </div>
  );
};

export default Header;
