import React from "react";

interface PencilProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Pencil: React.FC<PencilProps> = ({
  width = 14,
  height = 14,
  fill = "#7F7F7F",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 14 15"
      fill={fill}
    >
      <path
        d="M12.0808 4.60666C12.3083 4.37916 12.3083 3.99999 12.0808 3.78416L10.7158 2.41916C10.5 2.19166 10.1208 2.19166 9.89333 2.41916L8.82 3.48666L11.0075 5.67416M1.75 10.5625V12.75H3.9375L10.3892 6.29249L8.20167 4.10499L1.75 10.5625Z"
        fill={fill}
      />
    </svg>
  );
};

export default Pencil;
