import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#372F62"
      d="m21.63 9.078-9.9-8.8a1.099 1.099 0 0 0-1.46 0l-9.9 8.8a1.1 1.1 0 1 0 1.46 1.645l.37-.329V20.9A1.1 1.1 0 0 0 3.3 22h15.4a1.1 1.1 0 0 0 1.1-1.1V10.394l.37.33a1.1 1.1 0 1 0 1.46-1.646ZM17.6 19.8H4.4V8.44L11 2.572l6.6 5.867V19.8Z"
    />
  </svg>
)
export default SvgComponent
