import React from "react";

interface SearchProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const Search: React.FC<SearchProps> = ({
  width = "21.977px",
  height = "21.977px",
  fill = "#7F7F7F",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8512 14.5601L18.9647 17.6644C19.1381 17.8364 19.2356 18.0704 19.2356 18.3146C19.2356 18.5588 19.1381 18.7928 18.9647 18.9648C18.7928 19.1381 18.5587 19.2356 18.3145 19.2356C18.0704 19.2356 17.8363 19.1381 17.6644 18.9648L14.5601 15.8513C13.2803 16.8558 11.6999 17.4009 10.073 17.3989C6.02707 17.3989 2.74719 14.119 2.74719 10.0731C2.74719 6.02712 6.02707 2.74725 10.073 2.74725C14.1189 2.74725 17.3988 6.02712 17.3988 10.0731C17.4008 11.7 16.8558 13.2803 15.8512 14.5601ZM10.0733 4.57899C7.03885 4.57899 4.57894 7.0389 4.57894 10.0733C4.57894 13.1078 7.03885 15.5677 10.0733 15.5677C13.1077 15.5677 15.5677 13.1078 15.5677 10.0733C15.5677 7.0389 13.1077 4.57899 10.0733 4.57899Z"
      fill={fill}
    />
  </svg>
);

export { Search };
