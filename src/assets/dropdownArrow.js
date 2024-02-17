import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      fill="#372F62"
      d="M26 13a13 13 0 1 1-26 0 13 13 0 0 1 26 0ZM13.812 7.312a.812.812 0 1 0-1.624 0v9.414L8.7 13.237a.814.814 0 0 0-1.15 1.15l4.875 4.876a.815.815 0 0 0 1.15 0l4.875-4.875a.814.814 0 0 0-1.15-1.15l-3.488 3.488V7.313Z"
    />
  </svg>
)
export default SvgComponent
