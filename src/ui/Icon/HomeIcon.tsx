import { SVGProps } from "react";

// interface HomeIconProps extends SVGProps<SVGSVGElement> { }

// const HomeIcon = ({ width, height, ...props }: HomeIconProps) => (
interface HomeIconProps extends SVGProps<SVGSVGElement> { }

const HomeIcon: React.FC<HomeIconProps> = ({ width, height, stroke, ...props }: HomeIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 27"
    fill="none"
    xmlns="(link unavailable)"
    {...props}

  >
    <path
      d="M20.3831 25.0757H7.65049C4.63775 25.0757 2.19678 22.6237 2.19678 19.611V11.4634C2.19678 9.96804 3.12039 8.08783 4.30789 7.16422L10.2344 2.54616C12.0157 1.16074 14.8635 1.09477 16.7107 2.39222L23.5058 7.15323C24.8143 8.06584 25.8368 10.023 25.8368 11.6174V19.622C25.8368 22.6237 23.3959 25.0757 20.3831 25.0757ZM11.246 3.84362L5.31947 8.46168C4.53879 9.07742 3.84608 10.4738 3.84608 11.4634V19.611C3.84608 21.7111 5.55037 23.4264 7.65049 23.4264H20.3831C22.4833 23.4264 24.1875 21.7221 24.1875 19.622V11.6174C24.1875 10.5618 23.4289 9.09941 22.5602 8.50566L15.7651 3.74466C14.5116 2.86503 12.4445 2.90901 11.246 3.84362Z"
      fill={stroke}
    />
    <path
      d="M14.0169 20.6774C13.5661 20.6774 13.1923 20.3036 13.1923 19.8528V16.5541C13.1923 16.1033 13.5661 15.7295 14.0169 15.7295C14.4677 15.7295 14.8416 16.1033 14.8416 16.5541V19.8528C14.8416 20.3036 14.4677 20.6774 14.0169 20.6774Z"
      fill={stroke}
    />
  </svg>
  // <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width={28}
  //   height={28}
  //   fill="none"
  //   {...props}
  // >
  //   <path
  //     fill="#B0B0B0"
  //     d="M20.383 25.794H7.65c-3.012 0-5.453-2.451-5.453-5.464v-8.148c0-1.495.923-3.375 2.11-4.299l5.927-4.618c1.782-1.386 4.63-1.451 6.477-.154l6.795 4.761c1.308.913 2.33 2.87 2.33 4.464v8.005a5.46 5.46 0 0 1-5.453 5.453ZM11.246 4.562 5.319 9.18c-.78.616-1.473 2.013-1.473 3.002v8.148c0 2.1 1.704 3.815 3.804 3.815h12.733c2.1 0 3.805-1.704 3.805-3.804v-8.005c0-1.056-.76-2.518-1.628-3.112l-6.795-4.76c-1.253-.88-3.32-.836-4.519.098Z"
  //   />
  //   <path
  //     fill="#B0B0B0"
  //     d="M14.017 21.396a.83.83 0 0 1-.825-.825v-3.298a.83.83 0 0 1 .825-.825.83.83 0 0 1 .825.825v3.299a.83.83 0 0 1-.825.824Z"
  //   />
  // </svg>
);

export default HomeIcon;
