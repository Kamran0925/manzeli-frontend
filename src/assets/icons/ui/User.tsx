import React from "react";

interface UserProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
  style?: React.CSSProperties;
}

const defaultStyle: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const defaultProps = {
  width: "50",
  height: "48",
  fill: "#001283",
  style: defaultStyle,
};

const User: React.FC<UserProps> = (props) => {
  const {
    width = defaultProps.width,
    height = defaultProps.height,
    fill = defaultProps.fill,
    style = defaultProps.style,
    ...rest
  } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...rest}
    >
      <path
        d="M25 0L49.7275 17.9656L40.2824 47.0344H9.71758L0.272532 17.9656L25 0Z"
        fill={fill}
      />
    </svg>
  );
};

User.defaultProps = defaultProps;

export { User };
