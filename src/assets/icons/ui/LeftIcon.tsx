import React from "react";

interface LeftIconProps {
  width?: number;
  height?: number;
  fillEllipse?: string;
  fillPath?: string;
}

const LeftIcon: React.FC<LeftIconProps> = ({
  width = 67.613,
  height = 69.502,
  fillEllipse = "white",
  fillPath = "#001283",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 112 115"
    fill="none"
    style={{
      flexShrink: 0,
      filter: "drop-shadow(0px 8px 28px rgba(0, 0, 0, 0.15))",
    }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_48_716)">
      <ellipse
        cx="55.8068"
        cy="49.7177"
        rx="33.8065"
        ry="34.7512"
        transform="rotate(-180 55.8068 49.7177)"
        fill={fillEllipse}
      />
      <path
        d="M61.8885 41.3543L60.0331 39.4578L49.7241 50.0656L60.0435 60.6734L61.8885 58.7769L53.4141 50.0656L61.8885 41.3543Z"
        fill={fillPath}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_48_716"
        x="0.000244141"
        y="0.966553"
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
          result="effect1_dropShadow_48_716"
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
          result="effect1_dropShadow_48_716"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_48_716"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default LeftIcon;
