import React from "react";

interface CloudProps {
  height?: string | number;
  width?: string | number;
  fill?: string;
}

const Cloud: React.FC<CloudProps> = ({
  height = 38,
  width = 39,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 39 38"
      fill={fill}
    >
      <g clipPath="url(#clip0_104_8301)">
        <path
          d="M11.5834 28.4999C9.60782 28.4999 7.71318 27.7492 6.31624 26.413C4.91931 25.0768 4.13452 23.2646 4.13452 21.3749C4.13452 19.4852 4.91931 17.673 6.31624 16.3368C7.71318 15.0006 9.60782 14.2499 11.5834 14.2499C12.05 12.1713 13.4149 10.3446 15.378 9.1717C16.35 8.59095 17.4396 8.18819 18.5845 7.98641C19.7295 7.78464 20.9074 7.78781 22.051 7.99574C23.1946 8.20366 24.2815 8.61228 25.2496 9.19825C26.2177 9.78422 27.0481 10.5361 27.6934 11.4109C28.3387 12.2857 28.7862 13.2663 29.0104 14.2968C29.2346 15.3272 29.2311 16.3873 29.0001 17.4166H30.5834C32.0531 17.4166 33.4627 18.0004 34.5019 19.0397C35.5412 20.079 36.1251 21.4885 36.1251 22.9582C36.1251 24.428 35.5412 25.8375 34.5019 26.8768C33.4627 27.9161 32.0531 28.4999 30.5834 28.4999H29.0001"
          stroke="#001283"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.75 23.75L19.5 19L24.25 23.75"
          stroke="#001283"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 19V33.25"
          stroke="#001283"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_104_8301">
          <rect
            width="38"
            height="38"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Cloud;
