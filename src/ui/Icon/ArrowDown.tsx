import { SVGProps } from "react"

interface ArrowDownProps extends SVGProps<SVGSVGElement> {
  color: string;
}

const ArrowDown = ({ color, width, height, ...props }: ArrowDownProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path d="M21.6141 14.4199L16.6769 19.4583L11.2358 14.4199" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default ArrowDown;
