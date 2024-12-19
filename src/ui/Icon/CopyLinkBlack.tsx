import { SVGProps } from "react"

interface CopyLinkBlackProps extends SVGProps<SVGSVGElement> {
  color: string;
}

const CopyLinkBlack = ({ color, width, height, ...props }: CopyLinkBlackProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <rect x="9.79561" y="8.19941" width="15.8266" height="20.8574" rx="3.72299" stroke={color} strokeWidth="1.6" />
    <path d="M6.21732 21.3444V13.8282C6.21732 9.56389 6.21732 7.43173 7.54207 6.10698C8.86682 4.78223 10.999 4.78223 15.2633 4.78223H21.3121" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default CopyLinkBlack;
