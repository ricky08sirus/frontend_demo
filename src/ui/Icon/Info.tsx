import { SVGProps } from "react"

interface InfoProps extends SVGProps<SVGSVGElement> {
  color: string;
}

const Info = ({ color, width, height, ...props }: InfoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <circle cx="16.6043" cy="16.0146" r="10.4684" stroke={color} strokeOpacity="0.7" strokeWidth="1.47203" />
    <line x1="16.5881" y1="15.0227" x2="16.5881" y2="20.5419" stroke={color} strokeOpacity="0.7" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="16.6043" cy="11.7047" r="1.01814" fill={color} fillOpacity="0.7" />
  </svg>
)

export default Info;
