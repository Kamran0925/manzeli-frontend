import React from "react";

const Cross: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
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
