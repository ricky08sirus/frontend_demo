import { FC, SVGProps } from "react";
interface IconImageProp {
  src: string | FC<SVGProps<SVGSVGElement>>;
  alt: string;
  width: number;
  height: number;
}
export default function Icon({ src, alt, width, height }: IconImageProp) {
  if (typeof src === "string") {
    return (
      <img loading="lazy" className={`w-[${width}px] h-[${height}px]`} src={src} alt={alt} />
    );
  }
  const SvgIcon = src as FC<SVGProps<SVGSVGElement>>;
  return (
    <SvgIcon
      width={width}
      height={height}
      aria-label={alt}
      style={{ color: "red", stroke: "currentColor" }}
    />
  );
}
