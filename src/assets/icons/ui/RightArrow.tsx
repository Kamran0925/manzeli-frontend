import React from "react";

interface RightArrowIconProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const defaultProps = {
  width: "20",
  height: "20",
  fill: "#001283",
};

const RightArrowIcon: React.FC<RightArrowIconProps> = (props) => {
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
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5893 3.57709C10.2639 3.25165 9.73622 3.25165 9.41079 3.57709C9.08535 3.90252 9.08535 4.43016 9.41079 4.7556L13.8215 9.16634H4.16671C3.70647 9.16634 3.33337 9.53944 3.33337 9.99967C3.33337 10.4599 3.70647 10.833 4.16671 10.833H13.8215L9.41079 15.2438C9.08535 15.5692 9.08535 16.0968 9.41079 16.4223C9.73622 16.7477 10.2639 16.7477 10.5893 16.4223L16.4226 10.5889C16.7481 10.2635 16.7481 9.73586 16.4226 9.41042L10.5893 3.57709Z"
        fill={fill}
      />
    </svg>
  );
};

RightArrowIcon.defaultProps = defaultProps;

export { RightArrowIcon };
