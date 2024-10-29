import React from "react";

interface CrossProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}

const Cross: React.FC<CrossProps> = ({ width = 15, height = 15, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      {...props}
    >
      <path
        d="M5.29006 9.70937L9.71006 5.29062M5.29006 5.29062L9.71006 9.70937"
        stroke="#7F7F7F"
        strokeWidth="0.9375"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Cross;
