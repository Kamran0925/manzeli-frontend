import React from "react";

interface CheckmarkIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({
  width = 20,
  height = 20,
  color = "#5243C2",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C19.9936 4.47982 15.5202 0.00642897 10 0Z"
      fill={color}
      fillOpacity="0.15"
    />
    <path
      d="M15.7727 6.83362L10.0685 14.5745C9.93246 14.7549 9.7296 14.8732 9.50552 14.9027C9.28143 14.9321 9.0549 14.8703 8.87683 14.7311L4.8035 11.4745C4.44405 11.1868 4.38585 10.6622 4.6735 10.3028C4.96115 9.94334 5.48572 9.88514 5.84516 10.1728L9.24183 12.8903L14.431 5.84778C14.6012 5.59244 14.8979 5.45127 15.2033 5.48032C15.5088 5.50936 15.7736 5.70393 15.8926 5.98676C16.0116 6.2696 15.9655 6.59494 15.7727 6.83362Z"
      fill="white"
    />
  </svg>
);

export default CheckmarkIcon;
