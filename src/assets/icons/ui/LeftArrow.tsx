import React from "react";

interface LeftArrowProps {
  width?: number;
  height?: number;
  fill?: string;
}

const LeftArrow: React.FC<LeftArrowProps> = ({
  width = 20,
  height = 20,
  fill = "#8692A6",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.828 6.343a1 1 0 0 0-1.414 0L7.757 11.5a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414-1.414L9.414 12l5.828-5.828a1 1 0 0 0 0-1.414z"
      fill={fill}
    />
  </svg>
);

export default LeftArrow;
