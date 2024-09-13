import React from "react";

interface EllipseProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Ellipse: React.FC<EllipseProps> = ({
  width = 21,
  height = 20,
  fill = "#FF5B19",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="10.6182" cy="10" rx="10" ry="10" fill={fill} />
    </svg>
  );
};

export default Ellipse;
