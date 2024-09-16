import React from "react";

interface InversePyramidProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const InversePyramid: React.FC<InversePyramidProps> = ({
  width = "13.242px",
  height = "8.276px",
  fill = "#020615",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 14 9"
    fill="none"
    {...props}
  >
    <path
      d="M2.86198 3.6724H11.1381V5.32762H2.86198V3.6724ZM0.37915 0.361954H13.6209V2.01717H0.37915V0.361954ZM5.34481 6.98284H8.65526V8.63806H5.34481V6.98284Z"
      fill={fill}
    />
  </svg>
);

export { InversePyramid };
