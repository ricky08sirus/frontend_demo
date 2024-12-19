import { SVGProps } from "react"

interface EllipseProps extends SVGProps<SVGSVGElement> {}

const Ellipse: React.FC<EllipseProps> = (props) => (
  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="5" cy="5.2041" r="5" fill="#66BB6A" />
  </svg>
);

export default Ellipse;