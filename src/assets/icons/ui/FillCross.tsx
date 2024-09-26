import React from "react";

const FillCross: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
        fill="#F0F0F0"
      />
      <path
        d="M20.2426 11.7573L11.7573 20.2426"
        stroke="#505152"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7573 11.7573L20.2426 20.2426"
        stroke="#505152"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FillCross;
