import DelayServerDataFetch from "@/components/DelayServerDataFetch";
import { Box } from "@mui/material";
import React, { Suspense } from "react";

const StreamingSsrPage = () => {
  return (
    <Box>
      <h1>Streaming SSR Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DelayServerDataFetch />
      </Suspense>
    </Box>
  );
};

export default StreamingSsrPage;
