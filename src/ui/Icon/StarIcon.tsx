import { SVGProps } from "react";

interface StarIconProps extends SVGProps<SVGSVGElement> { }

const StarIcon: React.FC<StarIconProps> = (props) => (
  <svg
    width={28}
    height={22}
    viewBox="0 0 28 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.744 8.854a1.77 1.77 0 0 1 1.77-1.77h4.636a1.77 1.77 0 0 1 1.77 1.77v11.377H3.514a1.77 1.77 0 0 1-1.77-1.77V8.854ZM9.975 3.486a1.77 1.77 0 0 1 1.77-1.77h4.636a1.77 1.77 0 0 1 1.77 1.77v16.745H9.975V3.486ZM18.202 12.39a1.77 1.77 0 0 1 1.77-1.77h4.636a1.77 1.77 0 0 1 1.77 1.77v6.072a1.77 1.77 0 0 1-1.77 1.77h-6.406V12.39Z"
      stroke="#A0A0A0"
      strokeWidth={1.6}
    />
  </svg>
);

export default StarIcon;
