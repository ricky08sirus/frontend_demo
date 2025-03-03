import { SVGProps } from "react";

interface NotificationIconProps extends SVGProps<SVGSVGElement> {}

const NotificationIcon: React.FC<NotificationIconProps> = (props) => (
    <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path d="M5.76832 19.1393C5.52695 20.719 6.60465 21.8149 7.92373 22.3611C12.9813 24.4576 20.0187 24.4576 25.0763 22.3611C26.3954 21.8149 27.4731 20.7179 27.2317 19.1393C27.0844 18.1681 26.3512 17.3601 25.8084 16.5703C25.0978 15.5232 25.0276 14.382 25.0264 13.1672C25.0276 8.47335 21.2108 4.66797 16.5 4.66797C11.7892 4.66797 7.97246 8.47335 7.97246 13.1672C7.97246 14.382 7.9022 15.5243 7.19053 16.5703C6.64884 17.3601 5.91678 18.1681 5.76832 19.1393Z" stroke="#A0A0A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.967 23.9326C12.486 25.8874 14.3196 27.3323 16.4999 27.3323C18.6814 27.3323 20.5127 25.8874 21.0329 23.9326" stroke="#A0A0A0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default NotificationIcon;
