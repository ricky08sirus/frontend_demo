import { SVGProps } from "react"

interface BackArrowProps extends SVGProps<SVGSVGElement> {
  color: string;
}

const BackArrow = ({ color, width, height, ...props }: BackArrowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path d="M27.2645 16.2051H4.73987" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M16.0218 6.06934L4.74409 16.2096" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
    <path d="M4.73547 16.2051L15.9968 26.3387" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default BackArrow;
