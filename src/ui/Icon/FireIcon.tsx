import { SVGProps } from "react"
// const FireIcon = (props: SVGProps<SVGSVGElement>) => (
interface ExploreIconProps extends SVGProps<SVGSVGElement> { }

const FireIcon: React.FC<ExploreIconProps> = (props) => (
  <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg"    {...props}>
    <path d="M22.4236 19.7289C22.4236 24.2444 18.5263 27.9076 13.7216 27.9076C8.91994 27.9076 4.96371 24.2444 5.02262 19.7289C5.10511 13.4598 11.3561 10.1172 11.5329 5.25793C14.7114 5.89351 22.4236 12.4226 22.4236 19.7289Z" fill="url(#paint0_radial_5087_13062)" />
    <path d="M20.0315 19.729C20.0315 23.1958 17.233 26.0847 13.698 26.0847C10.1631 26.0847 7.36453 23.1958 7.36453 19.729C7.36453 14.5288 11.7833 12.2176 12.3724 8.46191C14.5818 8.89526 20.0315 13.3732 20.0315 19.729Z" fill="#FFDD00" fillOpacity="0.6" />
    <path d="M17.6749 19.7291C17.6749 22.0403 15.7601 23.7737 13.4035 23.7737C11.0468 23.7737 9.13205 22.0403 9.13205 19.7291C9.13205 15.6845 11.7833 14.5289 12.3724 11.9288C13.8454 12.2177 17.6749 14.5289 17.6749 19.7291Z" fill="white" fillOpacity="0.7" />
    <defs>
      <radialGradient id="paint0_radial_5087_13062" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(875.102 1364.24) scale(870.08 1132.48)">
        <stop stopColor="#FFFF00" />
        <stop offset="0.4" stopColor="#FFAA00" />
        <stop offset="0.7" stopColor="#FF5500" />
        <stop offset="1" stopColor="#FF0000" />
      </radialGradient>
    </defs>
  </svg>

  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={33}
  //   height={33}
  //   fill="none"
  //   {...props}
  // >
  //   <path
  //     fill="url(#a)"
  //     d="M26.476 20.1c0 5.206-4.494 9.43-10.034 9.43-5.537 0-10.099-4.224-10.03-9.43.094-7.23 7.302-11.084 7.506-16.687 3.665.733 12.558 8.261 12.558 16.686Z"
  //   />
  //   <path
  //     fill="#FD0"
  //     fillOpacity={0.6}
  //     d="M23.718 20.1c0 3.996-3.227 7.328-7.303 7.328-4.076 0-7.303-3.332-7.303-7.329 0-5.996 5.095-8.661 5.774-12.992 2.548.5 8.832 5.663 8.832 12.992Z"
  //   />
  //   <path
  //     fill="#fff"
  //     fillOpacity={0.7}
  //     d="M21 20.099c0 2.665-2.207 4.663-4.925 4.663-2.717 0-4.925-1.998-4.925-4.663 0-4.664 3.057-5.996 3.736-8.995C16.585 11.438 21 14.104 21 20.1Z"
  //   />
  //   <defs>
  //     <radialGradient
  //       id="a"
  //       cx={0}
  //       cy={0}
  //       r={1}
  //       gradientTransform="matrix(1003.26 0 0 1305.83 1009.67 1570.41)"
  //       gradientUnits="userSpaceOnUse"
  //     >
  //       <stop stopColor="#FF0" />
  //       <stop offset={0.4} stopColor="#FA0" />
  //       <stop offset={0.7} stopColor="#F50" />
  //       <stop offset={1} stopColor="red" />
  //     </radialGradient>
  //   </defs>
  // </svg>
)
export default FireIcon
