import DelayServerDataFetch from "@/components/DelayServerDataFetch";
import { Box } from "@mui/material";
import React from "react";

const StreamingSsrPage = () => {
  return (
    <Box>
      <h1>Streaming SSR Page</h1>
      <DelayServerDataFetch />
    </Box>
  );
};

export default StreamingSsrPage;
