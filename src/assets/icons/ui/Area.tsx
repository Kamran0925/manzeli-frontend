import React from "react";

interface AreaProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Area: React.FC<AreaProps> = ({
  width = 25,
  height = 26,
  fill = "#001283",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 26"
    fill="none"
  >
    <path
      d="M20.3125 21.0666V16.3791H21.875V22.6291H15.625V21.0666H20.3125ZM15.625 3.87909H21.875V10.1291H20.3125V5.44159H15.625V3.87909ZM3.125 10.1291V3.87909H9.375V5.44159H4.6875V10.1291H3.125ZM4.6875 16.3791V21.0666H9.375V22.6291H3.125V16.3791H4.6875Z"
      fill={fill}
    />
  </svg>
);

export default Area;
