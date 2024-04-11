import Image from "next/image";
type BadgeProps = {
  onClick: (text: String) => void;
  text: String;
  img?: String;
};
const Badge = ({ onClick, text, img }: BadgeProps) => {
  return (
    <div
      className="flex flex-row items-center justify-center gap-1 rounded-2xl bg-content-bg px-4 py-2 text-sm"
      onClick={() => onClick(text)}
    >
      {img != null && (
        <>
          <Image
            src={img.toString()}
            width={20}
            height={20}
            alt={text.toString()}
          />
        </>
      )}

      {text}
      <span className="hover:text-error ml-1 cursor-pointer text-xs">✕</span>
    </div>
  );
};

export default Badge;
