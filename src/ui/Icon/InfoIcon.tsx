import { SVGProps } from "react";

interface InfoIconProps extends SVGProps<SVGSVGElement> { }

const InfoIcon: React.FC<InfoIconProps> = (props) => (
  <svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx="16.6043"
      cy="16.0146"
      r="10.4684"
      stroke="#FFCA28"
      strokeOpacity="0.7"
      strokeWidth="1.47203"
    />
    <line
      x1="16.5881"
      y1="15.0227"
      x2="16.5881"
      y2="20.5419"
      stroke="#FFCA28"
      strokeOpacity="0.7"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle
      cx="16.6043"
      cy="11.7047"
      r="1.01814"
      fill="#FFCA28"
      fillOpacity="0.7"
    />
  </svg>
);

export default InfoIcon;
