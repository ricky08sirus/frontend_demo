import { SVGProps } from "react";

interface AirDropIconProps extends SVGProps<SVGSVGElement> {}

const AirDropIcon: React.FC<AirDropIconProps> = (props) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17.3068" cy="17.8766" r="3.32092" fill="url(#paint0_linear_964_70227)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2959 0.971628C17.4943 0.971601 17.661 1.11657 17.6985 1.31134C18.4694 5.31829 20.3027 8.997 23.2374 11.9317C26.1668 14.861 29.8375 16.6931 33.8361 17.4664C34.0432 17.5065 34.1975 17.6839 34.1971 17.8949C34.1967 18.1048 34.0434 18.281 33.8375 18.3215C29.8545 19.1047 26.1977 20.9384 23.2756 23.8605C20.3539 26.7822 18.5202 30.4385 17.7369 34.421C17.6975 34.6212 17.526 34.7702 17.3219 34.7706C17.1165 34.771 16.9438 34.6209 16.905 34.4192C16.1337 30.4136 14.3005 26.7362 11.3667 23.8024C8.42873 20.8644 4.74504 19.0302 0.732829 18.2608C0.540868 18.224 0.398024 18.0596 0.398132 17.8642C0.398239 17.669 0.540915 17.5049 0.732615 17.468C4.74041 16.6973 8.41991 14.8638 11.3551 11.9286C14.289 8.9947 16.1222 5.31709 16.8935 1.31128C16.931 1.11658 17.0976 0.971656 17.2959 0.971628ZM17.3007 6.56643C17.4333 6.56641 17.5449 6.66338 17.57 6.79366C18.0858 9.47465 19.3124 11.936 21.2759 13.8996C23.2359 15.8596 25.692 17.0853 28.3673 17.6028C28.5059 17.6296 28.6092 17.7482 28.6089 17.8894C28.6086 18.0298 28.506 18.1477 28.3683 18.1748C25.7033 18.6988 23.2566 19.9257 21.3015 21.8808C19.3466 23.8357 18.1198 26.2821 17.5956 28.9466C17.5693 29.0806 17.4546 29.1803 17.318 29.1805C17.1806 29.1808 17.0651 29.0804 17.0391 28.9455C16.5231 26.2654 15.2966 23.8049 13.3336 21.8419C11.3679 19.8762 8.90314 18.6489 6.21862 18.1342C6.09025 18.1096 5.99472 17.9996 5.99479 17.8689C5.99486 17.7383 6.09028 17.6286 6.21848 17.6039C8.90005 17.0883 11.362 15.8616 13.3259 13.8977C15.2889 11.9346 16.5155 9.4739 17.0315 6.79362C17.0566 6.66339 17.1681 6.56644 17.3007 6.56643Z"
      fill="url(#paint1_linear_964_70227)"
    />
    <defs>
      <linearGradient id="paint0_linear_964_70227" x1="14.977" y1="14.5557" x2="19.878" y2="14.8322" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9E74E2" />
        <stop offset="1" stopColor="#56A2FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_964_70227" x1="19.8443" y1="3.3533" x2="31.7387" y2="16.6725" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9E74E2" />
        <stop offset="1" stopColor="#56A2FF" />
      </linearGradient>
    </defs>
  </svg>
);

export default AirDropIcon;
