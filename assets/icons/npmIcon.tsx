import React from "react";
import { Box } from "@primer/react";

const NpmIcon = (props: any): JSX.Element => {
  return (
    <Box className={props.className}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9184 2.57764H2.57764V21.4215H11.9175V7.32964H16.6695V21.4215H21.4215V2.57764H11.9184Z"
          fill="currentColor"
        />
      </svg>
    </Box>
  );
};

export default NpmIcon;
