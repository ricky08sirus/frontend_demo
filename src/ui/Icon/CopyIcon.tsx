import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

const CopyIcon = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <rect
            width={9.176}
            height={12.194}
            x={6.44}
            y={4.917}
            stroke="#E0E0E0"
            strokeWidth={1.28}
            rx={2.978}
        />
        <path
            stroke="#E0E0E0"
            strokeLinecap="round"
            strokeWidth={1.28}
            d="M4.133 12.644v-2.7c0-3.412 0-5.117 1.06-6.177 1.06-1.06 2.765-1.06 6.177-1.06h1.82"
        />
    </svg>
)
export default CopyIcon