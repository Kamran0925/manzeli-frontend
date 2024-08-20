import React from "react";

interface EyeCrossProps extends React.SVGProps<SVGSVGElement> {
  height?: string | number;
  width?: string | number;
  fill?: string;
}

const EyeCross: React.FC<EyeCrossProps> = ({
  height = "18",
  width = "19",
  fill = "none",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 19 18"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.37505 1.875L5.21647 4.71642M16.6251 16.125L13.7839 13.2839M10.9843 14.4028C10.5037 14.494 10.0076 14.5417 9.50042 14.5417C5.95561 14.5417 2.95495 12.2119 1.94617 8.99997C2.22079 8.1256 2.64304 7.31661 3.18369 6.60219M7.82067 7.32062C8.25046 6.89083 8.84421 6.625 9.50005 6.625C10.8117 6.625 11.8751 7.68832 11.8751 9C11.8751 9.65584 11.6092 10.2496 11.1794 10.6794M7.82067 7.32062L11.1794 10.6794M7.82067 7.32062L5.21647 4.71642M11.1794 10.6794L5.21647 4.71642M11.1794 10.6794L13.7839 13.2839M5.21647 4.71642C6.45133 3.9203 7.92191 3.45833 9.5004 3.45833C13.0452 3.45833 16.0459 5.78814 17.0546 9.00003C16.495 10.7818 15.3224 12.2922 13.7839 13.2839"
      stroke="#040308"
      strokeOpacity="0.4"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyeCross;
