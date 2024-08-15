import React from "react";

interface MatrixIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const defaultProps = {
  width: "34",
  height: "33",
  fill: "none",
};

const MatrixIcon: React.FC<MatrixIconProps> = (props) => {
  const {
    width = defaultProps.width,
    height = defaultProps.height,
    fill = defaultProps.fill,
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 33"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21 0H33.5V33H0V20.5H21V0Z"
        fill={fill === "none" ? "white" : fill}
      />
    </svg>
  );
};

export default MatrixIcon;
