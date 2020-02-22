import React from 'react'

export interface ArrowProps {}

export const Arrow: React.SFC<ArrowProps> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      zoomAndPan="disable"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="18" x2="18" y2="36" />
      <line x1="36" y1="18" x2="18" y2="36" />
      <line x1="18" y1="36" x2="18" y2="0" />
    </svg>
  )
}
