import CaptureTools from "./_components/CaptureTools";

const CaptureToolsLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="grid w-full grid-cols-9 gap-2">
      <div className="col-span-2 px-6">
        <CaptureTools />
      </div>
      <div className="col-span-7 px-6">{children}</div>
    </div>
  );
};

export default CaptureToolsLayout;
