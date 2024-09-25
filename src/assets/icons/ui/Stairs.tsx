import React from "react";

interface StairsIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Stairs: React.FC<StairsIconProps> = ({
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
      d="M3.125 23.6708V21.5874H6.77083V16.8999H11.4583V12.2124H16.1458V7.52492H20.8333V3.87909H22.9167V9.60826H18.2292V14.2958H13.5417V18.9833H8.85417V23.6708H3.125Z"
      fill={fill}
    />
  </svg>
);

export default Stairs;
