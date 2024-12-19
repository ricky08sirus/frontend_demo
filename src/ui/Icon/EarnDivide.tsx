import { SVGProps } from "react"

const EarnDivide = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path d="M0.416829 3C0.416829 4.47276 1.61074 5.66667 3.0835 5.66667C4.55626 5.66667 5.75016 4.47276 5.75016 3C5.75016 1.52724 4.55626 0.333333 3.0835 0.333333C1.61074 0.333333 0.416829 1.52724 0.416829 3ZM0.416829 43C0.416829 44.4728 1.61074 45.6667 3.0835 45.6667C4.55626 45.6667 5.75016 44.4728 5.75016 43C5.75016 41.5272 4.55626 40.3333 3.0835 40.3333C1.61074 40.3333 0.416829 41.5272 0.416829 43ZM2.5835 3V43H3.5835V3H2.5835Z" fill="url(#paint0_linear_964_39252)" fillOpacity="0.4" />
    <defs>
      <linearGradient id="paint0_linear_964_39252" x1="3.1593" y1="7.44444" x2="4.01683" y2="40.3333" gradientUnits="userSpaceOnUse">
        <stop stopColor="#73FFB9" />
        <stop offset="0.5" stopColor="#56A2FF" />
        <stop offset="1" stopColor="#9E74E2" />
      </linearGradient>
    </defs>
  </svg>
)

export default EarnDivide;
