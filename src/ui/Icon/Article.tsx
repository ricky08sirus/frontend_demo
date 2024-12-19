import { SVGProps } from "react"

const Article = ({ width, height, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path d="M20.3125 3H5.8609C4.72542 3 3.79639 3.9 3.79639 5V19C3.79639 20.1 4.72542 21 5.8609 21H20.3125C21.448 21 22.377 20.1 22.377 19V5C22.377 3.9 21.448 3 20.3125 3ZM14.119 17H8.95768C8.38993 17 7.92542 16.55 7.92542 16C7.92542 15.45 8.38993 15 8.95768 15H14.119C14.6867 15 15.1512 15.45 15.1512 16C15.1512 16.55 14.6867 17 14.119 17ZM17.2157 13H8.95768C8.38993 13 7.92542 12.55 7.92542 12C7.92542 11.45 8.38993 11 8.95768 11H17.2157C17.7835 11 18.248 11.45 18.248 12C18.248 12.55 17.7835 13 17.2157 13ZM17.2157 9H8.95768C8.38993 9 7.92542 8.55 7.92542 8C7.92542 7.45 8.38993 7 8.95768 7H17.2157C17.7835 7 18.248 7.45 18.248 8C18.248 8.55 17.7835 9 17.2157 9Z" fill="#B0B0B0"/>
  </svg>
)

export default Article;
