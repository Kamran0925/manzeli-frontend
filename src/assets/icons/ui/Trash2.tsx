import React from "react";

interface Trash2Props {
  width?: string;
  height?: string;
}

const Trash2: React.FC<Trash2Props> = ({ width = "14px", height = "14px" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
    >
      <g clipPath="url(#clip0_2829_2803)">
        <path
          d="M1.94189 3.5058H13.8419M5.38309 3.5002V3.1796C5.38309 2.52202 5.64432 1.89137 6.10929 1.42639C6.57427 0.961417 7.20492 0.700195 7.8625 0.700195C8.52007 0.700195 9.15072 0.961417 9.6157 1.42639C10.0807 1.89137 10.3419 2.52202 10.3419 3.1796V3.5002M6.47649 6.3002V10.5002M9.31289 6.3002V10.5002M11.0419 13.3002H4.74189C4.37059 13.3002 4.0145 13.1527 3.75195 12.8901C3.48939 12.6276 3.34189 12.2715 3.34189 11.9002V3.5002H12.4419V11.9002C12.4419 12.2715 12.2944 12.6276 12.0318 12.8901C11.7693 13.1527 11.4132 13.3002 11.0419 13.3002Z"
          stroke="#7F7F7F"
          strokeWidth="1.28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2829_2803">
          <rect
            width="14"
            height="14"
            fill="white"
            transform="translate(0.891846)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Trash2;
