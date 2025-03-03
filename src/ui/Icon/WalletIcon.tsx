import { SVGProps } from "react";

interface WalletIconProps extends SVGProps<SVGSVGElement> {}

const WalletIcon: React.FC<WalletIconProps> = (props) => (
    <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M9.18039 11.1201H14.0601" stroke="#A0A0A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27.2757 12.3398H24.1014C21.9238 12.3398 20.1598 13.9782 20.1598 15.9996C20.1598 18.0211 21.925 19.6594 24.1002 19.6594H27.2757C27.3782 19.6594 27.4282 19.6594 27.4709 19.657C28.1296 19.6168 28.6542 19.13 28.6969 18.5188C28.6993 18.4798 28.6993 18.4322 28.6993 18.3383V13.661C28.6993 13.5671 28.6993 13.5195 28.6969 13.4805C28.653 12.8693 28.1296 12.3825 27.4709 12.3423C27.4294 12.3398 27.3782 12.3398 27.2757 12.3398Z" stroke="#A0A0A0" strokeWidth="1.6"/>
        <path d="M27.4367 12.3399C27.3416 10.0562 27.0366 8.6557 26.0496 7.67C24.6211 6.24023 22.3203 6.24023 17.7199 6.24023H14.0601C9.45976 6.24023 7.15896 6.24023 5.73042 7.67C4.30188 9.09976 4.30066 11.3993 4.30066 15.9997C4.30066 20.6001 4.30066 22.9009 5.73042 24.3294C7.16018 25.758 9.45976 25.7592 14.0601 25.7592H17.7199C22.3203 25.7592 24.6211 25.7592 26.0496 24.3294C27.0366 23.3437 27.3428 21.9432 27.4367 19.6595" stroke="#A0A0A0" strokeWidth="1.6"/>
        <path d="M23.8086 16H23.821" stroke="#A0A0A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default WalletIcon;
