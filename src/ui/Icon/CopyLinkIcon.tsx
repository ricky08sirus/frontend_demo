import { SVGProps } from "react";

interface CopyLinkIconProps extends SVGProps<SVGSVGElement> {}

const CopyLinkIcon: React.FC<CopyLinkIconProps> = (props) => (
  <svg
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.8"
      y="0.83418"
      width="38.4"
      height="38.4"
      rx="11.2"
      stroke="#57A3FF"
      strokeWidth="1.6"
    />
    <rect
      x="15.5491"
      y="13.7238"
      width="11.47"
      height="15.2431"
      rx="3.72299"
      stroke="#57A3FF"
      strokeWidth="1.6"
    />
    <path
      d="M12.6654 23.3826V20.0069C12.6654 15.7426 12.6654 13.6104 13.9901 12.2857C15.3149 10.9609 17.447 10.9609 21.7113 10.9609H23.9864"
      stroke="#57A3FF"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

export default CopyLinkIcon;
