import { SVGProps } from "react";

interface ArrowIconProps extends SVGProps<SVGSVGElement> {}

const ArrowIcon: React.FC<ArrowIconProps> = (props) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.4808 10.9287L18.5192 15.866L13.4808 21.3071"
      stroke="#E0E0E0"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
