import { SVGProps } from "react";

interface ShareIconProps extends SVGProps<SVGSVGElement> {}

const ShareIcon: React.FC<ShareIconProps> = (props) => (
  <svg
    width="40"
    height="41"
    viewBox="0 0 40 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y="0.0341797"
      width="40"
      height="40"
      rx="12"
      fill="#57A3FF"
    />
    <path
      d="M23.369 17.0485H25.1311C25.5984 17.0485 26.0466 17.2341 26.377 17.5646C26.7075 17.895 26.8931 18.3432 26.8931 18.8106V27.2685C26.8931 27.7358 26.7075 28.184 26.377 28.5144C26.0466 28.8449 25.5984 29.0305 25.1311 29.0305H14.5587C14.0914 29.0305 13.6432 28.8449 13.3127 28.5144C12.9823 28.184 12.7966 27.7358 12.7966 27.2685V18.8106C12.7966 18.3432 12.9823 17.895 13.3127 17.5646C13.6432 17.2341 14.0914 17.0485 14.5587 17.0485H16.3208M23.369 14.2292L19.8449 10.7051M19.8449 10.7051L16.3208 14.2292M19.8449 10.7051V22.7311"
      stroke="#0A0C1A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShareIcon;
