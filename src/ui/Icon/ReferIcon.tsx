import { SVGProps } from "react";

interface ReferIconProps extends SVGProps<SVGSVGElement> {}

const ReferIcon: React.FC<ReferIconProps> = (props) => (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Refer Icon</title>
      <mask id="mask0_964_70344" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="4" width="26" height="26">
        <path d="M28.1471 4.78027H3.85297V29.0744H28.1471V4.78027Z" fill="white" />
      </mask>
      <g mask="url(#mask0_964_70344)">
        <mask id="mask1_964_70344" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="3" y="4" width="26" height="26">
          <path d="M3.85298 4.77913H28.1471V29.0732H3.85298V4.77913Z" fill="white" />
        </mask>
        <g mask="url(#mask1_964_70344)">
          <path d="M8.88264 16.114C8.88264 13.9652 10.6247 12.2232 12.7735 12.2232C14.9223 12.2232 16.6644 13.9652 16.6644 16.114C16.6644 18.2629 14.9223 20.0049 12.7735 20.0049C10.6247 20.0049 8.88264 18.2629 8.88264 16.114Z" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14.9561 28.125H6.69992C5.41267 28.125 4.49874 26.8707 4.8929 25.6452C5.93997 22.3897 9.14907 20.0339 12.7527 20.0339C14.4717 20.0339 16.0655 20.57 17.376 21.4841" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.7047 9.61989C18.7047 7.47104 20.4467 5.72903 22.5956 5.72903C24.7444 5.72903 26.4864 7.47104 26.4864 9.61989C26.4864 11.7687 24.7444 13.5107 22.5956 13.5107C20.4467 13.5107 18.7047 11.7687 18.7047 9.61989Z" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16.6942 16.0732C18.1692 14.5131 20.2583 13.5396 22.5748 13.5396C24.2938 13.5396 25.8876 14.0757 27.1981 14.9898" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M23.6394 28.125V21.0076" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27.1981 24.5664H20.0807" stroke="#E0E0E0" strokeWidth="1.6" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </g>
    </svg>
  );
  
  export default ReferIcon;
  