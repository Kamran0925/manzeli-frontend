import React from "react";

const Trash: React.FC<React.SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 15"
      fill="none"
      {...props}
    >
      <path
        d="M11.0833 2.83333H9.04163L8.45829 2.25H5.54163L4.95829 2.83333H2.91663V4H11.0833M3.49996 11.5833C3.49996 11.8928 3.62288 12.1895 3.84167 12.4083C4.06046 12.6271 4.35721 12.75 4.66663 12.75H9.33329C9.64271 12.75 9.93946 12.6271 10.1583 12.4083C10.377 12.1895 10.5 11.8928 10.5 11.5833V4.58333H3.49996V11.5833Z"
        fill="#7F7F7F"
      />
    </svg>
  );
};

export default Trash;
