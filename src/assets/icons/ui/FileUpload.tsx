import React from "react";

interface FileUploadProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  width = 20,
  height = 20,
  fill = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.51293 12.5656V5.61805L7.64151 7.48946L7.07286 6.91278L9.91452 4.07031L12.757 6.91278L12.1883 7.49027L10.3161 5.61805V12.5656H9.51293ZM5.59018 15.3149C5.22018 15.3149 4.91149 15.1912 4.66411 14.9438C4.41673 14.6964 4.29277 14.3875 4.29224 14.0169V12.0708H5.09542V14.0169C5.09542 14.1406 5.14682 14.2541 5.24963 14.3575C5.35244 14.4608 5.46569 14.5122 5.58938 14.5117H14.2397C14.3628 14.5117 14.4761 14.4603 14.5794 14.3575C14.6828 14.2547 14.7342 14.1412 14.7336 14.0169V12.0708H15.5368V14.0169C15.5368 14.3869 15.4131 14.6956 15.1657 14.943C14.9184 15.1904 14.6094 15.3143 14.2389 15.3149H5.59018Z"
        fill={fill}
      />
    </svg>
  );
};

export default FileUpload;
