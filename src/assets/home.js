import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M10.8 12v1.2H9.6a1.2 1.2 0 0 0 0 2.4h1.2v1.2a1.2 1.2 0 0 0 2.4 0v-1.2h1.2a1.2 1.2 0 0 0 0-2.4h-1.2V12a1.2 1.2 0 1 0-2.4 0Zm12.797-2.097-10.8-9.6a1.199 1.199 0 0 0-1.594 0l-10.8 9.6a1.2 1.2 0 1 0 1.594 1.795l.403-.359V22.8A1.2 1.2 0 0 0 3.6 24h16.8a1.2 1.2 0 0 0 1.2-1.2V11.34l.403.358a1.2 1.2 0 0 0 1.594-1.795ZM19.2 21.6H4.8V9.206l7.2-6.4 7.2 6.4V21.6Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={24}
        y1={11.855}
        y2={11.855}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E48E51" />
        <stop offset={1} stopColor="#E8D48F" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
