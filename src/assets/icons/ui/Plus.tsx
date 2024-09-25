import React from "react";

interface PlusProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Plus: React.FC<PlusProps> = ({
  width = 26,
  height = 25,
  fill = "#020615",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 26 25"
    fill="none"
  >
    <path
      d="M20.5833 13.5417H14.0833V19.7917H11.9166V13.5417H5.41663V11.4583H11.9166V5.20834H14.0833V11.4583H20.5833V13.5417Z"
      fill={fill}
    />
  </svg>
);

export default Plus;
