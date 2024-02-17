import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={18}
    fill="none"
    {...props}
  >
    <path
      stroke="#372F62"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="m16.75 6.5 5.691-2.845a1.25 1.25 0 0 1 1.809 1.118v8.454a1.25 1.25 0 0 1-1.809 1.118L16.75 11.5m-12.5 5h10a2.5 2.5 0 0 0 2.5-2.5V4a2.5 2.5 0 0 0-2.5-2.5h-10A2.5 2.5 0 0 0 1.75 4v10a2.5 2.5 0 0 0 2.5 2.5Z"
    />
  </svg>
)
export default SvgComponent
