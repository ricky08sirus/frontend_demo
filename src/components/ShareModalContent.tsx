interface ShareModalContentProps {
  contentHeight: number;
}

export default function ShareModalContent({
  contentHeight,
}: ShareModalContentProps) {
  return (
    <div
      className={`mx-5 mb-8 flex flex-col overflow-auto scroll-container`}
      style={{ height: `${contentHeight}px` }}
    >
      ShareModal...
    </div>
  );
}
