import React from "react";

interface CircleProps {
  height?: string | number;
  width?: string | number;
  fill?: string;
}

const Circle: React.FC<CircleProps> = ({
  height = "114",
  width = "114",
  fill = "#D9D9D9",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 114 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="57" cy="57" r="57" fill={fill} />
  </svg>
);

export default Circle;
