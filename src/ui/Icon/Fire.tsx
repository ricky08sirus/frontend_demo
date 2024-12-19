import { SVGProps } from "react"

const Fire = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path d="M99.6769 87.0618C99.6769 107.506 82.3718 124.092 61.0381 124.092C39.7174 124.092 22.1507 107.506 22.4123 87.0618C22.7786 58.6778 50.5347 43.5441 51.3195 21.5432C65.433 24.4209 99.6769 53.982 99.6769 87.0618Z" fill="url(#paint0_radial_2045_15242)" />
    <path d="M89.0558 87.0615C89.0558 102.758 76.6296 115.838 60.9334 115.838C45.2372 115.838 32.811 102.758 32.811 87.0615C32.811 63.5172 52.4313 53.0531 55.0473 36.0488C64.8575 38.0109 89.0558 58.2851 89.0558 87.0615Z" fill="#FFDD00" fillOpacity="0.6" />
    <path d="M78.5917 87.0616C78.5917 97.5257 70.0896 105.374 59.6254 105.374C49.1613 105.374 40.6592 97.5257 40.6592 87.0616C40.6592 68.7493 52.4313 63.5173 55.0474 51.7451C61.5875 53.0531 78.5917 63.5173 78.5917 87.0616Z" fill="white" fillOpacity="0.7" />
    <defs>
      <radialGradient id="paint0_radial_2045_15242" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3885.78 6174.46) scale(3863.37 5127.43)">
        <stop stopColor="#FFFF00" />
        <stop offset="0.4" stopColor="#FFAA00" />
        <stop offset="0.7" stopColor="#FF5500" />
        <stop offset="1" stopColor="#FF0000" />
      </radialGradient>
    </defs>
  </svg>
)

export default Fire;
