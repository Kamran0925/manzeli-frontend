import React from "react";

interface HomeProps {
  width?: number;
  height?: number;
  fill?: string;
}

const Home: React.FC<HomeProps> = ({
  width = 21,
  height = 20,
  fill = "#7F7F7F",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.61816 10L3.61816 8M3.61816 8L10.6182 1L17.6182 8M3.61816 8V18C3.61816 18.2652 3.72352 18.5196 3.91106 18.7071C4.09859 18.8946 4.35295 19 4.61816 19H7.61816M17.6182 8L19.6182 10M17.6182 8V18C17.6182 18.2652 17.5128 18.5196 17.3253 18.7071C17.1377 18.8946 16.8834 19 16.6182 19H13.6182M7.61816 19C7.88338 19 8.13773 18.8946 8.32527 18.7071C8.51281 18.5196 8.61816 18.2652 8.61816 18V14C8.61816 13.7348 8.72352 13.4804 8.91106 13.2929C9.09859 13.1054 9.35295 13 9.61816 13H11.6182C11.8834 13 12.1377 13.1054 12.3253 13.2929C12.5128 13.4804 12.6182 13.7348 12.6182 14V18C12.6182 18.2652 12.7235 18.5196 12.9111 18.7071C13.0986 18.8946 13.3529 19 13.6182 19M7.61816 19H13.6182"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Home;
