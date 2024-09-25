import React from "react";

interface RightIconProps {
  width?: number;
  height?: number;
  fillEllipse?: string;
  fillPath?: string;
}

const RightIcon: React.FC<RightIconProps> = ({
  width = 67.613,
  height = 69.502,
  fillEllipse = "white",
  fillPath = "#001283",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 113 115"
    fill="none"
    style={{
      flexShrink: 0,
      filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_48_712)">
      <ellipse
        cx="56.2869"
        cy="49.2608"
        rx="33.8065"
        ry="34.7512"
        fill={fillEllipse}
      />
      <path
        d="M50.2052 57.6247L52.0606 59.5212L62.3696 48.9134L52.0502 38.3056L50.2052 40.2022L58.6797 48.9134L50.2052 57.6247Z"
        fill={fillPath}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_48_712"
        x="0.480469"
        y="0.509521"
        width="111.613"
        height="113.502"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="6"
          operator="erode"
          in="SourceAlpha"
          result="effect1_dropShadow_48_712"
        />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="14" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_48_712"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_48_712"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default RightIcon;
