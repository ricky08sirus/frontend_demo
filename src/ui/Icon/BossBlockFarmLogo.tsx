import { SVGProps } from "react"
interface BossBlockFarmLogoProps extends SVGProps<SVGSVGElement> {

}
const BossBlockFarmLogo = ({ width, height, ...props }: BossBlockFarmLogoProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        {...props}
    >
        <g opacity="0.8" clip-path="url(#clip0_2565_14894)">
            <path d="M4.94511 11.0819V7.43811H0V19.753H12.356V11.0819H4.94511ZM4.94511 16.6297V14.1914H7.35605V16.6297H4.94511Z" fill="white" />
            <path d="M7.41084 0V8.64368L14.8217 8.63V12.3286H19.7531V0H7.41084ZM12.356 5.52044V3.10953H14.8217V5.50677H12.356V5.52044Z" fill="white" />
            <path d="M4.95882 0H0V4.95882H4.95882V0Z" fill="#FF8A00" />
            <path d="M19.7668 14.7943H14.808V19.7531H19.7668V14.7943Z" fill="#037ED4" />
        </g>
        <defs>
            <clipPath id="clip0_2565_14894">
                <rect width="20" height="19.7531" fill="white" />
            </clipPath>
        </defs>
    </svg>


)
export default BossBlockFarmLogo