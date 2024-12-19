import { SVGProps } from "react";

interface BackIconProps extends SVGProps<SVGSVGElement> {}

const BackIcon: React.FC<BackIconProps> = (props) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M27.2645 16.2051H4.73987" stroke="#5F5F5F" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16.0218 6.06934L4.74409 16.2096" stroke="#5F5F5F" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4.73547 16.2051L15.9968 26.3387" stroke="#5F5F5F" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default BackIcon;
