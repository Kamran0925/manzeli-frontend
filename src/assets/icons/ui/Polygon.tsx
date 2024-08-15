import React from "react";

interface PolygonProps extends React.SVGProps<SVGSVGElement> {
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
  width: "20",
  height: "20",
  fill: "white",
  style: defaultStyle,
};

const Polygon: React.FC<PolygonProps> = (props) => {
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.72039 12.8874C4.50179 12.106 5.5616 11.667 6.66667 11.667H13.3333C14.4384 11.667 15.4982 12.106 16.2796 12.8874C17.061 13.6688 17.5 14.7286 17.5 15.8337V17.5003C17.5 17.9606 17.1269 18.3337 16.6667 18.3337C16.2064 18.3337 15.8333 17.9606 15.8333 17.5003V15.8337C15.8333 15.1706 15.5699 14.5347 15.1011 14.0659C14.6323 13.5971 13.9964 13.3337 13.3333 13.3337H6.66667C6.00363 13.3337 5.36774 13.5971 4.8989 14.0659C4.43006 14.5347 4.16667 15.1706 4.16667 15.8337V17.5003C4.16667 17.9606 3.79357 18.3337 3.33333 18.3337C2.8731 18.3337 2.5 17.9606 2.5 17.5003V15.8337C2.5 14.7286 2.93899 13.6688 3.72039 12.8874Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99992 3.33366C8.61921 3.33366 7.49992 4.45295 7.49992 5.83366C7.49992 7.21437 8.61921 8.33366 9.99992 8.33366C11.3806 8.33366 12.4999 7.21437 12.4999 5.83366C12.4999 4.45295 11.3806 3.33366 9.99992 3.33366ZM5.83325 5.83366C5.83325 3.53247 7.69873 1.66699 9.99992 1.66699C12.3011 1.66699 14.1666 3.53247 14.1666 5.83366C14.1666 8.13485 12.3011 10.0003 9.99992 10.0003C7.69873 10.0003 5.83325 8.13485 5.83325 5.83366Z"
        fill={fill}
      />
    </svg>
  );
};

Polygon.defaultProps = defaultProps;

export { Polygon };
