import React from "react";

interface UnitProps {
  width?: string;
  height?: string;
  fill?: string;
}

const Unit: React.FC<UnitProps> = ({
  width = "25px",
  height = "24px",
  fill = "#7F7F7F",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
    >
      <path
        d="M5.11816 0V24H11.1182V19.5H14.1182V24H20.1182V0H5.11816ZM9.61816 18H6.61816V15H9.61816V18ZM9.61816 13.5H6.61816V10.5H9.61816V13.5ZM9.61816 9H6.61816V6H9.61816V9ZM9.61816 4.5H6.61816V1.5H9.61816V4.5ZM14.1182 18H11.1182V15H14.1182V18ZM14.1182 13.5H11.1182V10.5H14.1182V13.5ZM14.1182 9H11.1182V6H14.1182V9ZM14.1182 4.5H11.1182V1.5H14.1182V4.5ZM18.6182 18H15.6182V15H18.6182V18ZM18.6182 13.5H15.6182V10.5H18.6182V13.5ZM18.6182 9H15.6182V6H18.6182V9ZM18.6182 4.5H15.6182V1.5H18.6182V4.5Z"
        fill={fill}
      />
    </svg>
  );
};

export default Unit;
